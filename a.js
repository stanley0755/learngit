 data() {
            return {
                query: ''
            }
        },
        created() {
            this.$watch('query', debounce((newQuery) => {
                this.$emit('query', newQuery)
            }, 200))
        },