export default {

    template: `
    <div class="flex-row rounded-md shadow-sm" role="group">
        <button v-on:click="$emit('update:currentTag', tag)"  v-for="tag in allTags" 
    class="inline-grid items-center justify-center float-right px-3 py-1 mr-4 text-md font-semibold rounded-md border border-white"
    :class="{ 'border-blue-500 text-blue-500': tag === currentTag }"
    >
        {{ tag }}
    </button>
    </div>
    `,
    props: {
        tags: Array,
        currentTag: String
    },
    data() {
        return {}
    },
    methods: {
    },
    computed: {
        allTags() {
            return ['all', ...new Set(this.tags)];
        }
    }
}