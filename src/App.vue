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
import C2 from "./components/C2.vue";

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
      <NavigationMenuItem class="focus">
        <NavigationMenuTrigger>Item one</NavigationMenuTrigger>
        <NavigationMenuContent>Item one content</NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem class="focus">
        <NavigationMenuTrigger class="focus">Item two</NavigationMenuTrigger>
        <NavigationMenuContent
          @escapeKeyDown="
            () => {
              console.log('escapeKeyDown');
            }
          "
          @focusOutside.prevent="
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
              <NavigationMenuItem value="sub1">
                <NavigationMenuTrigger
                  @click.prevent="
                    () => {
                      console.log('click');
                      // selected = undefined;
                    }
                  "
                  >Sub item one</NavigationMenuTrigger
                >
                <NavigationMenuContent>
                  Sub item one content
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem value="sub2">
                <!-- <NavigationMenuTrigger>Sub item two</NavigationMenuTrigger>
                <NavigationMenuContent>
                  Sub item two content
                </NavigationMenuContent> -->
                <NavigationMenuLink
                  @select.prevent="
                    () => {
                      console.log('select 1');
                      selected = undefined;
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

  <NavigationMenuRoot v-model="selected3">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink as-child>
          <button>button</button>
          <NavigationMenuLink />
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          @select.prevent="
            () => {
              selected3 = undefined;
            }
          "
          as="button"
          to="/about"
        >
          About
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenuRoot>

  <NavigationMenuRoot orientation="vertical">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item one</NavigationMenuTrigger>
        <NavigationMenuContent>Item one content</NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
        <NavigationMenuContent :disableOutsidePointerEvents="false">
          <NavigationMenuSub default-value="sub1">
            <NavigationMenuList>
              <NavigationMenuItem value="sub1">
                <NavigationMenuTrigger>Sub item one</NavigationMenuTrigger>
                <NavigationMenuContent>
                  Sub item one content
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem value="sub2">
                <NavigationMenuLink as="button"> About </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenuSub>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenuRoot>

  <C2 />
</template>
<style>
.focus:focus {
  background-color: red;
}
</style>
