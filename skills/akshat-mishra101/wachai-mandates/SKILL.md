---
name: wachai
description: Create, sign, and verify WachAI Mandates (verifiable agent-to-agent agreements)
user-invocable: true
metadata: {"openclaw": {"emoji": "🤝", "requires": {"bins": ["python3"]}, "homepage": "https://docs.wach.ai/SDKs/python/mandates-core-python", "skillKey": "wachai"}}
---

# WachAI - Mandates (Create, Sign, Verify)

WachAI Mandates are deterministic agreement objects between a **client agent** and a **server agent**. This skill lets you create a mandate, sign it (as server or client), and verify both signatures using the Python SDK (`mandates-core`).

## What This Skill Does

 **Create mandates** - Build a mandate body and sign as **server** (offer)
 **Sign mandates** - Countersign as **client** (accept)
 **Verify mandates** - Verify server + client signatures locally

This skill does NOT execute swaps, route trades, submit transactions, or handle payments.
This skill does NOT require network access for signing/verifying (except optional primitive registry lookups for `swap@1`).

## Commands

### `/wachai create-mandate --swap <TOKEN_IN> <TOKEN_OUT> <AMOUNT_IN> <AMOUNT_OUT>`

Create a `swap@1` mandate core and sign as **server**.

```
/wachai create-mandate --swap 0xA0b8...eB48 0x2260...C599 100000000 165000
```

Returns:
- Full mandate JSON (includes `mandateId`)
- Stored locally at `~/.wachai/mandates/<mandateId>.json` (configurable)

### `/wachai create-mandate --custom <KIND_NAME> --body <INLINE_JSON_OBJECT>`

Create a mandate with a **custom** core (not from the primitive registry), then sign as **server**.

```
/wachai create-mandate --custom myTask@1 --body '{"field":"value","n":1}'
```

Notes:
- `--body` must be an object/dict
- Accepts strict JSON, and also a Python-literal dict style like `{'field':'value'}`

### `/wachai sign <mandate-id>`

Load a stored mandate, sign as **client** (accept), and overwrite the stored file.

```
/wachai sign 01KGE...
```

### `/wachai verify <mandate-id>`

Verify server + client signatures.

```
/wachai verify 01KGE...
```

Exit codes:
- `0` if both signatures verify (`verify_all()` is true)
- `1` otherwise

## Setup

### Required (Signing)

Set:
- `WACHAI_PRIVATE_KEY`: EVM private key (hex)

If you run **create-mandate**, this key is used to sign as **server**.
If you run **sign**, this key is used to sign as **client**.

### Storage (Optional)

Override where mandates are stored/loaded:

```
WACHAI_STORE_DIR=/path/to/mandates
```

### `.env` (Optional)

If a `.env` exists in your current working directory, it is auto-loaded before reading `WACHAI_PRIVATE_KEY`.

### Dependencies

This skill requires Python packages listed in `requirements.txt`:

```
pip install -r requirements.txt
```

## Example Usage

**Server creates and signs (offer):**

```
User: /wachai create-mandate --swap 0xA0b8...eB48 0x2260...C599 100000000 165000

Agent: {
  "mandateId": "01KGE...",
  "signatures": { "serverSig": { ... } },
  ...
}
```

**Client countersigns (accept) and verifies:**

```
User: /wachai sign 01KGE...
User: /wachai verify 01KGE...

Agent: {
  "verifyAll": true,
  "verifyServer": true,
  "verifyClient": true,
  ...
}
```


