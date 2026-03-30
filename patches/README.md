# Core Patches

Only use patches when hooks and custom nodes can't achieve the goal.
Patches need to be re-validated on every upstream update.

## Naming Convention
`NNN-description.patch` (e.g., `001-smtp-sender-fix.patch`)

## Applying
Patches are applied during Docker build via `git apply`.
