<script lang="ts" context="module">
  const opts = [
    { label: "Projects", value: "projects" },
    { label: "Experience", value: "experience" },
    { label: "Education", value: "education" },
    { label: "Speaking & Writing", value: "speaking-and-writing" },
    { label: "Recommendation", value: "recomendation" },
  ] as const;

  export type View = (typeof opts)[number]["value"];
</script>

<script lang="ts">
  import { createDialog, createDropdownMenu, melt } from "@melt-ui/svelte";
  import { flyAndScale } from "../utils/transitions";
  import { createEventDispatcher } from "svelte";

  export let selected = "";
  $: selectedLabel = opts.find((o) => o.value === selected)?.label;

  const dispatch = createEventDispatcher<{
    select: { value: View };
  }>();

  const {
    elements: { trigger, menu, item },
    states: { open },
  } = createDropdownMenu({
    positioning: { placement: "bottom-start" },
    preventScroll: false,
  });
</script>

<!-- TRIGGER -->
<button
  class="py-2 pt-56px text-neutral-6 rd-md flex items-center gap-2 outline-gray"
  aria-label="Select category"
  use:melt={$trigger}
>
  <div class="max-w-26ch text-#000000 text-(sm start) sm-text-base">
    {selectedLabel}
  </div>
  <div
    class="text-xs pt-3 relative text-#000000 bottom--1px i-bi-chevron-expand i-iconoir-arrow-separate-vertical"
  />
</button>

{#if $open}
  <!-- FOR WHOLE DROP DOWN -->
  <ul
    use:melt={$menu}
    transition:flyAndScale={{ duration: 150, y: 8, start: 0.96 }}
    style="border-radius: 6px;
        background: #F7F3F0;
        box-shadow: 3px 4px 9.7px 0px rgba(205, 205, 205, 0.30);"
    class="z-40 min-w-180px bg-#F7F3F0 shadow-xl gap-10px br-lg p-16px"
  >
    {#each opts as { label, value }, i}
      <!-- FOR INDIVIDUAL ITEM -->
      <li
        style=""
        class=" font-mena-grotesk text-#9B9B9B fw-300 text-14px px-12px py-6px"
        use:melt={$item}
        on:m-click={() => dispatch("select", { value })}
      >
        {label}
      </li>
    {/each}
  </ul>
{/if}
