<template>
  <h2>name: {{ state.name }}</h2>
  <h2>age: {{ state.age }}</h2>
  <h2>wife: {{ state.wife }}</h2>
  <h2>refCount: {{ count }}</h2>
  <hr />
  <button @click="update">更新</button>
</template>

<script lang="ts">
/*
reactive:
    作用: 定义多个数据的响应式
    const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
    响应式转换是“深层的”：会影响对象内部所有嵌套的属性
    内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
*/
import { ref, reactive } from "vue";
export default {
  setup() {
    /*
    定义响应式数据对象
    */
    const state = reactive({
      name: "tom",
      age: 25,
      wife: {
        name: "marry",
        age: 22,
      },
    });
    console.log(state, state.wife);

    // 定义响应式数据 ref对象
    const count = ref(1);
    console.log(count);

    const update = () => {
      state.name += "--";
      state.age += 1;
      state.wife.name += "++";
      state.wife.age += 2;
      count.value += 1;
    };

    return {
      state,
      count,
      update,
    };
  },
};
</script>
