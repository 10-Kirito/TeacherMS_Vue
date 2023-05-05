"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[791],{4791:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var s=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("分数登记")]),t("div",{staticStyle:{margin:"10px 0"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{"suffix-icon":"el-icon-search",placeholder:"请输入学号"},model:{value:e.searchInfo.studentId,callback:function(t){e.$set(e.searchInfo,"studentId",t)},expression:"searchInfo.studentId"}}),t("el-input",{staticStyle:{width:"200px","margin-left":"5px"},attrs:{"suffix-icon":"el-icon-search",placeholder:"请输入姓名"},model:{value:e.searchInfo.studentName,callback:function(t){e.$set(e.searchInfo,"studentName",t)},expression:"searchInfo.studentName"}}),[t("el-select",{staticStyle:{"margin-left":"5px"},attrs:{clearable:"",placeholder:"请选择课程"},model:{value:e.searchInfo.className,callback:function(t){e.$set(e.searchInfo,"className",t)},expression:"searchInfo.className"}},e._l(e.courseName,(function(e){return t("el-option",{key:e,attrs:{value:e}})})),1)],t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.getStudentDetails}},[e._v("搜索")]),t("el-button",{attrs:{type:"warning"},on:{click:e.reset}},[e._v("重置")])],2),t("el-table",{attrs:{data:e.studentDetails,border:"",stripe:"","header-cell-class-name":"headerBg"}},[t("el-table-column",{attrs:{prop:"studentId",label:"学生学号",width:"140",align:"center"}}),t("el-table-column",{attrs:{prop:"studentName",label:"学生姓名",width:"140",align:"center"}}),t("el-table-column",{attrs:{prop:"classId",label:"课程号",width:"140",align:"center"}}),t("el-table-column",{attrs:{prop:"className",label:"课程名",width:"140",align:"center"}}),t("el-table-column",{attrs:{prop:"term",label:"学期",align:"center"}}),t("el-table-column",{attrs:{prop:"usuallyScore",label:"平时成绩",align:"center"}}),t("el-table-column",{attrs:{prop:"testScore",label:"考试成绩",align:"center"}}),t("el-table-column",{attrs:{prop:"totalScore",label:"总成绩",align:"center"}}),t("el-table-column",{attrs:{label:"操作",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"success"},on:{click:function(t){return e.handleEdit(a.row)}}},[e._v("登记成绩 "),t("i",{staticClass:"el-icon-edit"})])]}}])})],1),t("div",{staticStyle:{padding:"10px 0"}},[t("el-pagination",{attrs:{"current-page":e.pageNum,"page-sizes":[2,5,10,20],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),t("el-dialog",{attrs:{title:"登记成绩",visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{attrs:{"label-width":"80px",size:"small"}},[t("el-form-item",{attrs:{label:"学号"}},[t("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:e.details.studentId,callback:function(t){e.$set(e.details,"studentId",t)},expression:"details.studentId"}})],1),t("el-form-item",{attrs:{label:"姓名"}},[t("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:e.details.studentName,callback:function(t){e.$set(e.details,"studentName",t)},expression:"details.studentName"}})],1),t("el-form-item",{attrs:{label:"平时成绩"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.registInfo.usuallyScore,callback:function(t){e.$set(e.registInfo,"usuallyScore",t)},expression:"registInfo.usuallyScore"}})],1),t("el-form-item",{attrs:{label:"考试成绩"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.registInfo.testScore,callback:function(t){e.$set(e.registInfo,"testScore",t)},expression:"registInfo.testScore"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.regist}},[e._v("确 定")])],1)],1)],1)},l=[],r=a(6369),i={name:"registScore",inject:["reload"],data(){return{user:{},studentDetails:[],courseName:[],total:0,pageNum:1,pageSize:10,searchInfo:{studentId:"",studentName:"",className:""},registInfo:{recordId:null,usuallyScore:null,testScore:null},dialogVisible:!1,details:{}}},created(){this.getUser(),this.myClassName(),this.getStudentDetails()},methods:{getUser(){const e=JSON.parse(localStorage.getItem("userInfo"));e&&r["default"].set(this,"user",e)},myClassName(){this.request.get("/open-class/myClassName",{params:{teacherId:this.user.teacherId}}).then((e=>{"SUCCESS"==e.code&&(this.courseName=e.data)}))},handleSizeChange(e){this.pageSize=e,this.load()},handleCurrentChange(e){this.pageNum=e,this.load()},handleEdit(e){this.dialogVisible=!0,this.registInfo.recordId=e.recordId,this.details=e},regist(){this.dialogVisible=!1,this.request.get("/select-class/registScore",{params:{recordId:this.registInfo.recordId,usuallyScore:this.registInfo.usuallyScore,testScore:this.registInfo.testScore}}).then((e=>{"SUCCESS"==e.code&&(this.$message.success(e.msg),this.reload())}))},getStudentDetails(){this.request.get("/select-class/registStudents",{params:{currentPage:this.pageNum,pageSize:this.pageSize,studentId:this.searchInfo.studentId,studentName:this.searchInfo.studentName,className:this.searchInfo.className}}).then((e=>{"SUCCESS"==e.code&&(this.studentDetails=e.data.records,this.pageSize=e.data.size,this.pageNum=e.data.current,this.total=e.data.total)}))},reset(){this.searchInfo={},this.getStudentDetails()},handleClose(e){this.$confirm("确认关闭？").then((t=>{e()})).catch((e=>{}))}}},n=i,o=a(1001),c=(0,o.Z)(n,s,l,!1,null,"7363b815",null),u=c.exports}}]);
//# sourceMappingURL=791.57daf735.js.map