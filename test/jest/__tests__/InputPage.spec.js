import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('ตรวจสอบหัวข้อ title', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  });
  it('เซเว่น(nickname)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  });
  it('ปรเมษฐ์ (firstName)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  });
  it('จันทร์ย้อน (secondName)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  });
  it('348 (studentcode)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  });
  it('ตรวจสอบตัวแปร title', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          title: 'ฉันรักวิว.',
          nickname:'เซเว่น',
          firstName: 'ปรเมษฐ์',
          secondName: 'จันทร์ย้อน',
          studentcode: '348'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('ฉันรักวิว.')
  })
})


test('ทดสอบว่ามีฟอร์ม', () => {
const wrapper = shallowMount(IndexPage)
expect(wrapper.find('form').exists()).toBe(true)
})

test('ทดสอบว่ามีฟอร์ม มีการรับค่า', () => {
const wrapper = shallowMount(IndexPage)
expect(wrapper.find('form > input').exists()).toBe(true)
})

test('ทดสอบว่ามีปุ่ม', () => {
const wrapper = shallowMount(IndexPage)
expect(wrapper.find('button').exists()).toBe(true)
})