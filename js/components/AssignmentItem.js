export default {
    template: `
    <li>
                            <label>
                                <input v-model="item.completed" type="checkbox" name="" id="" class="mx-2">
                                {{ item.name }} </label>
    </li>`
    ,
    props: {
        item: Object
    }
}