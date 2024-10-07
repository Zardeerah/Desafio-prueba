import { shallowMount } from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";

describe("AboutView", () => {
    test("Probando la existencia del componente o vista AboutView ", () => {
        const wrapper = shallowMount(AboutView);
        expect(wrapper.findComponent(AboutView).exists()).toBe(true);
    }),
    it ( "matches snapshot", () => {
        const wrapper = shallowMount(AboutView);
        expect(wrapper.html()).toMatchSnapshot();
    })
});