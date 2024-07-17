<script setup lang="ts">
import {
  defineAsyncComponent,
  defineComponent,
  h,
  ref,
  watchEffect,
} from "vue";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuSub,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationMenuLink,
} from "radix-vue";

const selected = ref();
const selected2 = ref();
const selected3 = ref();
watchEffect(() => {
  console.log(`🚀 // DEBUG 🍔 ~ file: App.vue:18 ~ .value:`, selected.value);
  console.log(
    `🚀 // DEBUG 🍔 ~ file: App.vue:18 ~ select3.value:`,
    selected3.value
  );
});
</script>

<template>
  <NavigationMenuRoot v-model="selected" orientation="vertical">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
        <NavigationMenuContent
          @escapeKeyDown="
            () => {
              console.log('escapeKeyDown');
            }
          "
          @focusOutside="
            () => {
              console.log('focusOutside');
            }
          "
          @interactOutside="
            () => {
              console.log('interactOutside');
            }
          "
          @pointerDownOutside="
            () => {
              console.log('point@pointerDownOutside');
            }
          "
        >
          <NavigationMenuSub default-value="sub1">
            <NavigationMenuList>
              <NavigationMenuItem value="sub2">
                <NavigationMenuLink
                  @select="
                    () => {
                      console.log('select');
                    }
                  "
                  as="button"
                  to="/about"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenuSub>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenuRoot>

  <NavigationMenuRoot orientation="vertical">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuSub default-value="sub1">
            <NavigationMenuList>
              <NavigationMenuItem value="sub2">
                <NavigationMenuLink as="button"> About </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenuSub>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenuRoot>
</template>
