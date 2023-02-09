export default {
    template: `
    <form @submit.prevent="add">
      <div class="mb-6 flex-row mt-4">
    <label for="newitem" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
    <input v-model="newAssignment" type="text" id="newitem" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add a new item" required>
<button 
                    :class=" 
                    {
                        'btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:cursor-not-allowed mt-3' : true,
                        'loader': processing === true
                    }"
                    >
                        <slot/>
                        </button>
                        </div>
                        </form>
  `,
    props: {
        processing: { type: Boolean, default: false }
    },
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('newitem', this.newAssignment);
            this.newAssignment = '';
        }

    }
}