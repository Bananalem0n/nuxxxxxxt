<!-- Header.vue -->
<template>
  <div class="HeroHeader">
    <div class="hero-text">
      <span class="justify-center md:justify-start text-3xl sm:text-4xl font-medium flex tracking-wide text-gunmetal dark:text-background">
        <slot name="subtitle"></slot>
      </span>
      <span class="justify-center align-middle md:justify-start text-5xl sm:text-6xl font-semibold flex tracking-wider text-gunmetal dark:text-background">
        <slot name="title"></slot>
      </span>
    </div>
  </div>
</template>