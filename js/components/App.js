import Assignments from "./Assignments.js";
import Panel from "./Panel.js";
export default {
    components: {
        Assignments, Panel
    },
    template: `
            <assignments></assignments>
            <panel theme="dark"><template v-slot:heading>This is my heading</template>  <template v-slot:logo>This is my logo</template> </panel>
    `,

}