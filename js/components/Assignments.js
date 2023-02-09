import AssignmentList from './AssignmentList.js';
import AssignmentItemCreate from './AssignmentItemCreate.js';
export default {
    components: {
        AssignmentList,
        AssignmentItemCreate
    },
    template: `
    <div :class="{'spinner': loading === true}"></div>
    <div class="flex flex-row">
        <assignment-list :assignments="filters.inprogress" title="In Progress" ><assignment-item-create @newitem="add">Add new item</assignment-item-create></assignment-list>
    <assignment-list v-if="showCompleted" @toggle="showCompleted = !showCompleted" :assignments="filters.completed" title="Completed" can-toggle></assignment-list>
    </div>

       `,
    data() {
        return {
            assignments: [],
            loading: false,
            showCompleted: true,
        }
    },
    computed: {
        filters() {
            return {
                inprogress: this.assignments.filter(a => !a.completed),
                completed: this.assignments.filter(a => a.completed)
            };
        }
    },
    created() {
        this.loading = true;
        fetch("http://localhost:3001/assignments").
            then((response) => response.json())
            .then((data) => {
                this.assignments = data;
                this.loading = false;
            })

    },
    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            });
        }
    }
}
