import moment from 'moment'

export default  [
    {id:'1',description:'water bill',note:'',amount: 12000, createdAt: 0},
    {id:'2',description:'gas bill',note:'',amount:83300,createdAt: moment(0).subtract(4,'days').valueOf()},
    {id:'3',description:'electicity bill',note:'',amount:823300,createdAt: moment(0).add(4,'days').valueOf()}
    ]