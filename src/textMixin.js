export const textMixin = {
    data(){
        return {
            text: 'I am an awesome text!',
            filterText: ''
        }
    },
    filters: {
        textReverse(value){
            return value.split('').reverse().join('');
        }
    },
    computed: {
        textReversed() {
            return this.filterText.split('').reverse().join('');
        },
        lengthAware() {
            return this.filterText  + ' (' + this.filterText.length + ')';
        }
    }
}