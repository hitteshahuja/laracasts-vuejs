export default {

    template: `
    <div :class="{
        'px-5 inline-flex flex-col justify-center min-h-full box-content h-3/4 mb-5 w-50 rounded-lg shadow-lg m-4'  : true,
        'bg-white text-black' : theme == 'light',
        'bg-gray-800 text-white' : theme == 'dark',
    }">
        <p class="font-bold mb-2" v-if="$slots.heading"><slot name="heading"></slot></p>

        <slot name="default"></slot>
    </div>
    `,
    props: {
        theme: { type: String, default: 'dark' }
    }
}