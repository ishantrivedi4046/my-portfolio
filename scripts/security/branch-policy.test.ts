import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';

test('the actual promotion guard allows only same-repository develop', () => {
  // Exercise the reviewed workflow shell directly, rather than copying its logic.
  const workflow = readFileSync('.github/workflows/branch-policy.yml', 'utf8');
  const marker = '        run: |\n';
  assert.ok(workflow.includes(marker), 'Promotion guard shell block must exist');
  const script = workflow.slice(workflow.indexOf(marker) + marker.length)
    .split('\n').map((line) => line.slice(10)).join('\n');
  for (const [branch, repository, expected] of [
    ['develop', 'owner/repository', 0],
    ['feature/example', 'owner/repository', 1],
    ['develop', 'fork/repository', 1],
    ['develop; echo unexpected', 'owner/repository', 1],
  ] as const) {
    const result = spawnSync('sh', ['-c', script], {
      encoding: 'utf8', env: {
        ...process.env, HEAD_BRANCH: branch, HEAD_REPOSITORY: repository,
        GITHUB_REPOSITORY: 'owner/repository',
      },
    });
    assert.equal(result.status, expected, result.stderr);
  }
});
