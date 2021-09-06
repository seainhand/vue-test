import {shallowMount, VueWrapper} from '@vue/test-utils';
// @ts-ignore
import Uploader from '@/components/Upload.vue';


let wrapper: VueWrapper<any>;

describe('Upload.vue', () => {
    beforeAll(() => {
        wrapper = shallowMount(Uploader, {
            props: {
                action: 'test.url'
            }
        });
    });
    it('UI测试', () => {
        // 存在按钮
        expect(wrapper.find('button').exists()).toBeTruthy();
        expect(wrapper.get('button span').text()).toBe('点击上传');
        expect(wrapper.get('input').isVisible()).toBeFalsy();
    });
});
