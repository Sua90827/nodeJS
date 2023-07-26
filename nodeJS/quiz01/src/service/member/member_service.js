const member = require("../../database/member/memberDAO");
const db = ()=>{
    return member;
}
module.exports = {db}