import Test from './src/test'
Test.install = Vue => {
  Vue.component(Test.name, Test)
}
export default Test
