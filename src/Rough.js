import axios from "axios";
const URL_BASE= "https://api.github.com/repos/atom/.github/issues";

axios.get(URL_BASE).then(function (res){
    res.data.map(el=>console.log(el.title));
})
