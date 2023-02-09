import AssignmentItem from './AssignmentItem.js';
import AssignmentTags from './AssignmentTags.js';
import Panel from './Panel.js';
export default {
    components: {
        AssignmentItem, AssignmentTags, Panel
    },
    template: `
        <panel theme="dark" v-show="assignments.length">
                        <template v-slot:heading><p class="font-bold mb-1">{{ title }} <span
                            class="inline-grid items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none bg-red-600 rounded-full">{{
                            assignments.length}}</span></p></template>
            <div class="flex w-50 rounded-lg  shadow-lg">
                <div class="p-6 flex flex-col justify-between">
                            <button v-show="canToggle" @click="$emit('toggle')" >&times;</button>
                        <assignment-tags :tags ="assignments.map(a => a.tag)" v-model:currentTag="currentTag"></assignment-tags>

                            <ul>
                        <assignment-item 
                        v-for="(item, index) in filteredAssigments" 
                        :key="item.id"
                        :item="item"
                        >
                        </assignment-item>
                    </ul>
                </div>
            </div>
            <div><slot></slot></div>
        </panel>
`,
    props: {
        title: String,
        assignments: Array,
        canToggle: { type: Boolean, default: false }
    },

    data() {
        return {
            currentTag: 'all'
        }
    },
    computed: {
        filteredAssigments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        }
    }
}