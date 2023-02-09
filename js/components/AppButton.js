export default
    {
        template: `
                    <button 
                    :disabled="processing" 
                    :class=" 
                    {
                        'btn text-black font-bold py-2 px-4 rounded-full disabled:cursor-not-allowed' : true,
                        'bg-blue-500 hover:bg-blue-700': type === 'primary',
                        'bg-green-500 hover:bg-green-700': type === 'secondary',
                        'is-loading': processing === true
                    }"
                    >
                        <slot/>
                        </button>
                
                    `,

        data() {
            return {
            }
        },
        props: {
            type: {
                type: String,
                default: 'primary'
            },
            processing: {
                type: Boolean,
                default: false
            }
        }
    }