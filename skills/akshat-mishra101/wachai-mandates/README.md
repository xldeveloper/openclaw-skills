# WachAI OpenClaw Skill

This repo provides a small command-line tool (`wachai`) for creating, signing, and verifying **WachAI mandates** using the Python SDK.

- Docs: `https://docs.wach.ai/SDKs/python/mandates-core-python`
- Package: `mandates-core==0.1.3`

## What This Is

 **Mandate creation** - Generate a deterministic agreement object and sign as **server** (offer)  
 **Countersigning** - Sign as **client** (accept)  
 **Signature verification** - Verify both parties locally  

This tool does NOT execute workflows, route trades, submit transactions, or handle payments.  

## Install

Create a virtualenv and install locally:

```bash
python -m venv .venv
. .venv/bin/activate
pip install -U pip
pip install -r requirements.txt
```

### Run as a script (optional)

You can also run it directly:

```bash
python scripts/wachai_skill.py --help
```

## Environment

### Environment variables

| Variable | Description | Required |
|----------|-------------|----------|
| `WACHAI_PRIVATE_KEY` | EVM private key used to sign (server for `create-mandate`, client for `sign`) | For signing |
| `WACHAI_STORE_DIR` | Override local mandate storage directory | No |

Example:

```bash
export WACHAI_PRIVATE_KEY=0xabc123...
```

### Local storage

By default, mandates are stored at:

- `~/.wachai/mandates/<mandateId>.json`

Override:

```bash
export WACHAI_STORE_DIR=/path/to/mandates
```

### .env support

The project **does not require** a `.env`, but it will **auto-load** a `.env` from your current working directory (if present) before reading `WACHAI_PRIVATE_KEY`.

## Commands

| Command | Description | Requires `WACHAI_PRIVATE_KEY`? |
|---------|-------------|-------------------------------|
| `python3 scripts/wachai_skill.py create-mandate ...` | Create and sign as **server** (offer) | Yes |
| `python3 scripts/wachai_skill.py sign <mandate-id>` | Sign as **client** (accept) | Yes |
| `python3 scripts/wachai_skill.py verify <mandate-id>` | Verify server + client signatures | No |

### Create a swap mandate (server offer)

Creates a `swap@1` core and signs as **server**.

```bash
python3 scripts/wachai_skill.py create-mandate --swap <FROM_ADDRESS> <TO_ADDRESS> <AMOUNT_IN> <AMOUNT_OUT>
```

Notes:

- `<FROM_ADDRESS>` and `<TO_ADDRESS>` are used as `tokenIn` and `tokenOut` (ERC-20 contract addresses).
- `<AMOUNT_IN>` and `<AMOUNT_OUT>` are used as `amountIn` and `minOut` (integers, as strings on-chain).
- By default, the mandate is saved to `~/.wachai/mandates/<mandateId>.json`.
- If you don’t pass `--client`, the CLI defaults the client to the server address (useful for demos).

Common options:

- `--client 0x...` (or CAIP-10 like `eip155:1:0x...`)
- `--chain-id 1`
- `--deadline 2025-12-31T00:10:00Z`
- `--swap-deadline 2025-12-31T00:00:00Z`
- `--no-store`

### Create a custom-core mandate (server offer)

If you want a core that is **not** part of the remote primitive registry, you can attach it manually:

```bash
python3 scripts/wachai_skill.py create-mandate --custom <KIND_NAME> --body '{"field":"value"}'
```

Notes:

- `--body` must be an **object/dict**.
- The CLI accepts strict JSON, and also accepts a Python-literal dict style like `{'field':'value'}`.

### Sign (client accept)

Loads `~/.wachai/mandates/<mandateId>.json`, signs as **client**, and overwrites the stored file:

```bash
python3 scripts/wachai_skill.py sign <mandate-id>
```

### Verify

Verifies server + client signatures:

```bash
python3 scripts/wachai_skill.py verify <mandate-id>
```

Exit codes:

- `0` if `verify_all()` is true
- `1` otherwise

## Configuration (OpenClaw)

If you’re wiring this into OpenClaw, you can set env vars for the skill entry (example structure):

Invoke via slash commands:

- `/wachai create-mandate ...`
- `/wachai sign <mandate-id>`
- `/wachai verify <mandate-id>`

```json
{
  "skills": {
    "entries": {
      "wachai": {
        "enabled": true,
        "env": {
          "WACHAI_PRIVATE_KEY": "0x...",
          "WACHAI_STORE_DIR": "/path/to/mandates"
        }
      }
    }
  }
}
```

## Security

- **No on-chain transactions**: this tool only creates/signs/verifies mandate JSON.
- **No background processes**: it only runs when you invoke a command.
- **Private keys**: `WACHAI_PRIVATE_KEY` is only used for signing (create/sign). `verify` does not need it.
- **Local persistence**: mandates are stored as JSON on disk (configurable via `WACHAI_STORE_DIR`).

## Dependencies

- Python 3.10+
- `mandates-core==0.1.3` (WachAI mandates SDK)
- `eth-account` (key/address utilities)


