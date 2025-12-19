# Bug Fix Workflow

A systematic approach to identifying, fixing, and preventing bugs.

## Workflow Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                      BUG FIX WORKFLOW                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. Debugger         →  2. Code Reviewer  →  3. Test Writer     │
│  (Root Cause)           (Fix Review)         (Regression Test)  │
│         │                     │                    │            │
│         ▼                     ▼                    ▼            │
│                    4. Documentation Update                       │
│                    (If public-facing bug)                        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Stages

### Stage 1: Root Cause Analysis
**Agent**: Debugger
**Tasks**:
- Reproduce the bug
- Analyze error messages and logs
- Trace code execution
- Identify root cause
- Propose fix

### Stage 2: Fix Implementation & Review
**Agent**: Code Reviewer
**Tasks**:
- Implement the fix
- Review fix for side effects
- Ensure minimal change
- Check for related issues

### Stage 3: Regression Testing
**Agent**: Test Writer
**Tasks**:
- Write test that reproduces the bug
- Verify fix passes the test
- Check for regression in related areas
- Add edge case tests

### Stage 4: Documentation (Conditional)
**Agent**: Documentation Writer
**Condition**: If bug was user-facing or notable
**Tasks**:
- Update changelog
- Add to known issues if needed
- Document workarounds if applicable

## Usage

```
/workflow bug-fix [bug description or issue link]
```

## Input Required

- Bug description or error message
- Steps to reproduce
- Expected vs actual behavior
- Environment information
- Any relevant logs

## Output

- Root cause analysis report
- Fixed code with explanation
- Regression test(s)
- Documentation updates (if applicable)

## Best Practices

1. **Always reproduce first** - Verify you can see the bug
2. **Fix the root cause** - Don't just patch symptoms
3. **Minimal changes** - Don't refactor during bug fixes
4. **Test the fix** - Add test that would have caught this
5. **Check for siblings** - Similar bugs elsewhere?
