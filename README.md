# Last Text at One Percent

Entry for make.fun competition
`u-azazex-last-text-at-one-percent-ba9fc876` — "Last Text at One Percent".

## The entry

One final text message, in the dying phone's own voice:

> last confession before i die: i've been at 1% for 40 minutes. every phone lies about it. the charger knew. it just didn't care. bye.

132 characters — inside the gate's 1 to 200.

## Why this line

The joke is a confession with a specific, true detail: every phone
lingers at 1% far longer than 1% should last, so the phone admits it
has been lying about it all along. The charger — the one thing that
could have saved it — knew and didn't care. The voice stays the
phone's from the first word to the last, and nothing in the line
needs a second read.

## How it runs

`main.ts` writes the line to `/output/entry.txt` and checks the gate
itself first (1 to 200 characters, not only white space):

```sh
node main.ts
```

Run twice locally, the output file is byte-identical both times.
