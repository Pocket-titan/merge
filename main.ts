import { Text } from "@codemirror/state";
import { presentableDiff, oldPresentableDiff } from "./src/diff";

const originalValue = `this is my original string
i want it to be different
a diff
that works
nicely`;

const newValue = `this is my original string
i want its to be different
a diffs
nicely
new line`;

function main() {
  const aText = Text.of(originalValue.split(/\r?\n/));
  const bText = Text.of(newValue.split(/\r?\n/));

  console.log("\n\n\n");
  const regular = oldPresentableDiff(originalValue, newValue);
  console.log(`regular`, regular);

  regular.forEach((x) => {
    const inA = aText.slice(x.fromA, x.toA).toString();
    const inB = bText.slice(x.fromB, x.toB).toString();

    console.log(`inA:`, inA);
    console.log(`inB:`, inB);
    console.log("\n");
  });

  console.log("\n");
  const results = presentableDiff(originalValue, newValue);
  console.log(`results`, results);

  results.forEach((x) => {
    const inA = aText.slice(x.fromA, x.toA).toString();
    const inB = bText.slice(x.fromB, x.toB).toString();

    console.log(`inA:`, inA);
    console.log(`inB:`, inB);
    console.log("\n");
  });
}

main();
