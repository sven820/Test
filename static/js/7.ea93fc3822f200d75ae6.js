webpackJsonp([7],{"/UYj":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("fBsX"),n=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);var c=s("7AG/");var o=function(t){s("Dlzq"),s("zcLb")},r=s("C7Lr")(n.a,c.a,!1,o,"data-v-6bbd948a",null);e.default=r.exports},"/WQb":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=o(s("3cXf")),n=o(s("PLMy")),i=o(s("2fBp")),c=o(s("X2Oc"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={name:"attentionStudent",components:{ExceptionView:i.default},props:{examIdParam:{type:String,request:!1},classIdParam:{type:String,request:!1},subjectCodeParam:{type:String,request:!1}},data:function(){return{examId:null,classId:null,subjectCode:null,titleTab:{PROGRESS_STUDENTS:1,BACKWARD_STUDENTS:2,CRITICALS_STUDENTS:3,UNSTABLE_STUDENTS:4,currentTab:""},showTabStudens:[],studentData:{progressStudents:[],backwardStudents:[],criticalsStudents:[],unstableStudents:[]}}},mounted:function(){this.examId=this.examIdParam,this.classId=this.classIdParam,this.subjectCode=this.subjectCodeParam,this.getExamTypicalStudent()},methods:{getExamTypicalStudent:function(){var t=this;n.default.getExamTypicalStudent(this.examId,this.classId,this.subjectCode).then(function(e){e&&(t.studentData.progressStudents=e.progressStudents,t.studentData.backwardStudents=e.backwardStudents,t.studentData.criticalsStudents=e.criticals,t.studentData.unstableStudents=e.unstableStudents,t.initTab(t.titleTab.PROGRESS_STUDENTS))}).catch(function(t){})},showExamPaper:function(e){var s="",n="",i=this.showTabStudens.length;this.showTabStudens.forEach(function(t,e){s+=t.userId,n+=t.userName,e!==i-1&&(s+=",",n+=",")}),window.AppKSBGInterface?window.AppKSBGInterface.checkStuSheetForJs(e,s,n):window.NativeAPI&&window.NativeAPI.checkStuSheetForJs?window.NativeAPI.checkStuSheetForJs(e,s,n):window.checkStuSheetForJs?window.checkStuSheetForJs(e,s,n):window.ZXApp.teacherReport.checkStuSheetForJs&&window.ZXApp.teacherReport.checkStuSheetForJs(e,s,n),c.default.setLog(t.REPORT,t.APP_OPCODE.CODE_1027,(0,a.default)({userId:this.userId,examId:this.examId}))},initTab:function(e){c.default.setLog(t.REPORT,t.APP_OPCODE.CODE_1026,(0,a.default)({userId:this.userId,examId:this.examId})),this.titleTab.currentTab!==e&&(this.titleTab.currentTab=e,console.log(e),this.titleTab.currentTab===this.titleTab.PROGRESS_STUDENTS?this.refreshProgressStudents():this.titleTab.currentTab===this.titleTab.BACKWARD_STUDENTS?this.refreshBackwardStudents():this.titleTab.currentTab===this.titleTab.CRITICALS_STUDENTS?this.refreshCriticalsStudents():this.titleTab.currentTab===this.titleTab.UNSTABLE_STUDENTS?this.refreshUnstableStudents():(console.log("tab 参数不对"),this.titleTab.currentTab=""))},populateRank:function(t){console.log("rankList",t),console.log("currentTab",this.currentTab);var e=void 0;return t&&t.length>0&&(e=t[0]),void 0!==e&&null!==e||(e="——"),"第"+e+"名"},populateRankChange:function(t){return t.rankList&&t.rankList.length>=2?Math.abs(t.rankList[0]-t.rankList[1]):"--"},refreshProgressStudents:function(){this.showTabStudens=this.studentData.progressStudents},refreshBackwardStudents:function(){this.showTabStudens=this.studentData.backwardStudents},refreshCriticalsStudents:function(){this.showTabStudens=this.studentData.criticalsStudents},refreshUnstableStudents:function(){this.showTabStudens=this.studentData.unstableStudents}}}}).call(e,s("9AUj"))},"4Kl7":function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"attention_student_container"},[t._m(0),t._v(" "),s("div",{staticClass:"header_tab"},[s("ul",[s("li",{class:{checked:t.titleTab.currentTab===t.titleTab.PROGRESS_STUDENTS},on:{click:function(e){return t.initTab(t.titleTab.PROGRESS_STUDENTS)}}},[t._v("大幅进步\n      ")]),t._v(" "),s("li",{class:{checked:t.titleTab.currentTab===t.titleTab.BACKWARD_STUDENTS},on:{click:function(e){return t.initTab(t.titleTab.BACKWARD_STUDENTS)}}},[t._v("大幅退步\n      ")]),t._v(" "),s("li",{class:{checked:t.titleTab.currentTab===t.titleTab.CRITICALS_STUDENTS},on:{click:function(e){return t.initTab(t.titleTab.CRITICALS_STUDENTS)}}},[t._v("临界生\n      ")]),t._v(" "),s("li",{class:{checked:t.titleTab.currentTab===t.titleTab.UNSTABLE_STUDENTS},on:{click:function(e){return t.initTab(t.titleTab.UNSTABLE_STUDENTS)}}},[t._v("波动生\n      ")])])]),t._v(" "),t.showTabStudens&&t.showTabStudens.length>0?s("div",{staticClass:"student_content"},[s("ul",{staticClass:"student_title"},[s("li",{staticClass:"name"},[t._v("姓名")]),t._v(" "),s("li",{staticClass:"grade"},[t._v("成绩")]),t._v(" "),s("li",{staticClass:"rank"},[t._v("排名")]),t._v(" "),this.titleTab.currentTab===t.titleTab.PROGRESS_STUDENTS?s("li",{staticClass:"progress_rank"},[t._v("进步名次")]):t._e(),t._v(" "),this.titleTab.currentTab===t.titleTab.BACKWARD_STUDENTS?s("li",{staticClass:"progress_rank"},[t._v("退步名次")]):t._e(),t._v(" "),this.titleTab.currentTab===t.titleTab.CRITICALS_STUDENTS?s("li",{staticClass:"progress_rank"},[t._v("距离及格线")]):t._e(),t._v(" "),this.titleTab.currentTab===t.titleTab.UNSTABLE_STUDENTS?s("li",{staticClass:"progress_rank"},[t._v("波动名次")]):t._e(),t._v(" "),s("li",{staticClass:"student_detail"},[t._v("操作")])]),t._v(" "),t._l(t.showTabStudens,function(e,a){return s("ul",{key:a,staticClass:"student_item"},[s("li",{staticClass:"name",domProps:{textContent:t._s(e.userName)}}),t._v(" "),s("li",{staticClass:"grade",domProps:{textContent:t._s(e.score)}}),t._v(" "),s("li",{staticClass:"rank",domProps:{textContent:t._s(t.populateRank(e.rankList))}}),t._v(" "),t.titleTab.currentTab===t.titleTab.PROGRESS_STUDENTS||t.titleTab.currentTab===t.titleTab.BACKWARD_STUDENTS?s("li",{staticClass:"progress_rank",domProps:{textContent:t._s(t.populateRankChange(e))}}):t._e(),t._v(" "),t.titleTab.currentTab===t.titleTab.CRITICALS_STUDENTS?s("li",{staticClass:"progress_rank",domProps:{textContent:t._s(e.marginScore)}}):t._e(),t._v(" "),t.titleTab.currentTab===t.titleTab.UNSTABLE_STUDENTS?s("li",{staticClass:"progress_rank",domProps:{textContent:t._s(e.rankRange)}}):t._e(),t._v(" "),s("li",{staticClass:"student_detail",on:{click:function(e){return t.showExamPaper(a)}}},[t._v("查看原卷")])])})],2):s("exception-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("i"),this._v(" "),e("span",[this._v("需关注的学生")])])}]};e.a=a},"7AG/":function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"academic_overview_container"},[s("div",{staticClass:"content"},[s("div",{staticClass:"class_avg"},[s("div",{staticClass:"class_content_container"},[s("div",{staticClass:"class_content"},[s("i"),t._v(" "),s("div",[s("div",[s("span",{staticClass:"class_number",domProps:{textContent:t._s(t.classAvgScore)}}),t._v(" "),s("span",{staticClass:"number_suffix"},[t._v("分")])]),t._v(" "),s("span",{staticClass:"title"},[t._v("班级均分")])])])]),t._v(" "),s("div",{staticClass:"bottom_title"},[t._v("\n        年级平均分"+t._s(t.gradeAvgScore)+"\n      ")])]),t._v(" "),s("div",{staticClass:"class_ranking"},[s("div",{staticClass:"class_content_container"},[s("div",{staticClass:"class_content"},[s("i"),t._v(" "),s("div",[s("div",[s("span",{staticClass:"class_number",domProps:{textContent:t._s(t.classRanking)}}),t._v(" "),s("span",{staticClass:"number_suffix"},[t._v("名")])]),t._v(" "),s("span",{staticClass:"title"},[t._v("班级排名")])])])]),t._v(" "),s("div",{staticClass:"bottom_title",domProps:{textContent:t._s("共"+t.totalClassNum+"个班级")}})]),t._v(" "),s("div",{staticClass:"max_score"},[s("div",{staticClass:"class_content_container"},[s("div",{staticClass:"class_content"},[s("i"),t._v(" "),s("div",[s("div",[s("span",{staticClass:"class_number",domProps:{textContent:t._s(t.highestScore)}})]),t._v(" "),s("span",{staticClass:"title"},[t._v("最高分")])])])]),t._v(" "),s("div",{staticClass:"bottom_title",domProps:{textContent:t._s("年级最高分"+t.gradeHighestScore)}})]),t._v(" "),s("div",{staticClass:"excellent_rate"},[s("div",{staticClass:"class_content_container"},[s("div",{staticClass:"class_content"},[s("i"),t._v(" "),s("div",[s("div",[s("span",{staticClass:"class_number",domProps:{textContent:t._s(t.excellentRate)}}),t._v(" "),s("span",{staticClass:"number_suffix"},[t._v("%")])]),t._v(" "),s("span",{staticClass:"title"},[t._v("优秀率")])])])]),t._v(" "),s("div",{staticClass:"bottom_title",domProps:{textContent:t._s("年级优秀率"+t.gradeExcellentRate+"%")}})]),t._v(" "),s("div",{staticClass:"qualified_rate"},[s("div",{staticClass:"class_content_container"},[s("div",{staticClass:"class_content"},[s("i"),t._v(" "),s("div",[s("div",[s("span",{staticClass:"class_number",domProps:{textContent:t._s(t.qualifiedRate)}}),t._v(" "),s("span",{staticClass:"number_suffix"},[t._v("%")])]),t._v(" "),s("span",{staticClass:"title"},[t._v("合格率")])])])]),t._v(" "),s("div",{staticClass:"bottom_title",domProps:{textContent:t._s("年级合格率"+t.gradeQualifiedRate+"%")}})])]),t._v(" "),s("div",{staticClass:"summary_bottom"},[s("span",{domProps:{textContent:t._s("共"+t.totalClassNum+"个班"+t.schStudentCount+"人参加考试 | 本班实际参与考试"+t.schSubmitStudentCount+"人")}}),t._v(" "),t.showAbsentStudents.length>0?s("a",{staticClass:"viewNow",attrs:{type:"text"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("立即查看")]):t._e()]),t._v(" "),s("el-dialog",{staticClass:"viewNow_dialog",attrs:{visible:t.dialogVisible,width:"5.94rem"},on:{"update:visible":function(e){t.dialogVisible=e},open:t.openCallback,close:t.closeCallback,touchmove:function(t){t.preventDefault()}}},[s("div",[s("div",{staticClass:"header"},[s("i",{on:{click:function(e){t.dialogVisible=!1}}}),t._v(" "),s("span",[t._v("缺考学生")])]),t._v(" "),s("div",{staticClass:"body_content"},t._l(t.showAbsentStudents,function(e,a){return s("ul",{key:a,staticClass:"stu_list"},t._l(e,function(e,a){return s("li",{key:a},[s("span",{domProps:{textContent:t._s(e.userName)}})])}),0)}),0)])])],1)},staticRenderFns:[]};e.a=a},"9XEn":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("AMxk"),n=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);var c=s("9li5");var o=function(t){s("GGXV")},r=s("C7Lr")(n.a,c.a,!1,o,"data-v-0b6abb54",null);e.default=r.exports},"9li5":function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t._m(0),t._v(" "),t.dataList.length>0?s("div",{staticClass:"student_content"},[t._m(1),t._v(" "),s("table",{staticClass:"content"},t._l(t.dataList,function(e,a){return s("tr",{key:a},[s("td",{staticClass:"sy1"},[s("span",{style:{"font-size":e.dispTitle.length>3?"0.15rem":"0.22rem"},domProps:{textContent:t._s(e.dispTitle)}})]),t._v(" "),s("td",{staticClass:"sy2"},[s("span",{domProps:{textContent:t._s(t.getKnowledgeTitle(e.knowledgeList))}})]),t._v(" "),s("td",{staticClass:"sy3",domProps:{textContent:t._s(t.fixNum(100*e.clsScoreRate,2)+"%")}}),t._v(" "),s("td",{staticClass:"sy4",domProps:{textContent:t._s(t.fixNum(100*(e.clsScoreRate-e.schScoreRate),2)+"%")}}),t._v(" "),s("td",{staticClass:"sy5",domProps:{textContent:t._s(t.getTopErrorOps(e.topErrorOps))}})])}),0)]):s("exception-view",{attrs:{msg:"当前暂无高频错题"}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("i"),this._v(" "),e("span",{staticClass:"text-ttile"},[this._v("高频错题")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"header"},[s("tr",[s("td",{staticClass:"sy1"},[t._v("题号")]),t._v(" "),s("td",{staticClass:"sy2"},[t._v("知识点")]),t._v(" "),s("td",{staticClass:"sy3"},[t._v("班级得分率")]),t._v(" "),s("td",{staticClass:"sy4"},[t._v("与年级相比")]),t._v(" "),s("td",{staticClass:"sy5"},[t._v("高频错误项")])])])}]};e.a=a},AMxk:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(s("PLMy")),n=i(s("2fBp"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={name:"HighWrongTopic",components:{ExceptionView:n.default},props:{examIdParam:{type:String,request:!1},classIdParam:{type:String,request:!1},topicSetIdParam:{type:String,request:!1}},created:function(){this.getExamErrorTopicList()},data:function(){return{dataList:[]}},methods:{getKnowledgeTitle:function(t){return t?t.length<1?"--":t.join("；"):"--"},getTopErrorOps:function(t){return t?t.length<1?"--":t.join("、"):"--"},fixNum:function(t,e){e=isNaN(e)?0:e,t=t.toFixed(2);var s=Math.pow(10,e);return Math.round(t*s)/s},getExamErrorTopicList:function(){var t=this;a.default.getExamErrorTopic(this.examIdParam,this.classIdParam,this.topicSetIdParam).then(function(e){t.dataList=e}).catch(function(e){t.dataList=[]})}}}},COwQ:function(t,e){},Dlzq:function(t,e){},GGXV:function(t,e){},IfTm:function(t,e){},"OXf/":function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isShow?s("div",{staticClass:"single_overview"},[s("academic-overview",{attrs:{examIdParam:t.examId,classIdParam:t.classId,subjectCodeParam:t.subjectCode}}),t._v(" "),s("academic-level",{staticClass:"academic_view",attrs:{examIdParam:t.examId,classIdParam:t.classId,topicSetIdParam:t.subjectCode}}),t._v(" "),s("attention-student",{attrs:{examIdParam:t.examId,classIdParam:t.classId,subjectCodeParam:t.subjectCode}}),t._v(" "),s("high-wrong-topic",{staticClass:"wrongtopic_view",attrs:{examIdParam:t.examId,classIdParam:t.classId,topicSetIdParam:t.subjectCode}})],1):t._e()},staticRenderFns:[]};e.a=a},R7EY:function(t,e){},RqUZ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("yZRW"),n=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);var c=s("OXf/");var o=function(t){s("IfTm")},r=s("C7Lr")(n.a,c.a,!1,o,null,null);e.default=r.exports},SnkI:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=o(s("3cXf")),n=o(s("X2Oc")),i=o(s("PLMy")),c=o(s("2fBp"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={name:"AcademicLevel",props:{examIdParam:{type:String,request:!1},classIdParam:{type:String,request:!1},topicSetIdParam:{type:String,request:!1}},components:{ExceptionView:c.default,commonUtils:n.default},data:function(){return{dataList:[],colors:[{id:"3",color:"#0dc2b3"},{id:"8",color:"#769bf8"},{id:"13",color:"#ffbf4e"},{id:"18",color:"#ff4b4b"},{id:"1",color:"#80fce3"},{id:"6",color:"#accafc"},{id:"11",color:"#ffe2b0"},{id:"16",color:"#ffa7a7"},{id:"2",color:"#43e6c5"},{id:"7",color:"#85b3fe"},{id:"12",color:"#ffd07e"},{id:"17",color:"#ff7777"},{id:"4",color:"#03a799"},{id:"9",color:"#5b86f3"},{id:"14",color:"#f1a116"},{id:"19",color:"#dd3030"},{id:"5",color:"#03988b"},{id:"10",color:"#3f73f6"},{id:"15",color:"#d88a02"},{id:"20",color:"#bc4444"}],resultColors:[],expandList:{},expandState:{EXPAND_CLOSE:0,EXPAND_OPEN:1,EXPAND_NO:2},imageUrls:{expand:"@/assets/images/class_report_academicLevel_expand.png",fold:"@/assets/images/class_report_academicLevel_fold.png"}}},created:function(){this.getAcademicLevelList()},mounted:function(){},methods:{clickStudent:function(t,e){if(t<e.length){for(var s=[],a=[],n=0;n<e.length;n++){var i=e[n];s.push(i.userId),a.push(i.userName)}window.NativeAPI&&window.NativeAPI.checkStuSheetForJs?window.NativeAPI.checkStuSheetForJs(t,s.join(","),a.join(",")):window.checkStuSheetForJs?window.checkStuSheetForJs(t,s.join(","),a.join(",")):window.ZXApp.teacherReport.checkStuSheetForJs&&window.ZXApp.teacherReport.checkStuSheetForJs(t,s.join(","),a.join(","))}else this.Toast("该学生没有原卷")},getRankColor:function(t){return t<this.resultColors.length?this.resultColors[t].color:"#0dc2b3"},getLineExpandText:function(t,e){return this.getLineExpand(t,e)?"收起":"展开"},getLineExpand:function(t,e){return this.expandList[e]===this.expandState.EXPAND_CLOSE},clickExpandLine:function(t,e){var s=this.expandList[e];s===this.expandState.EXPAND_CLOSE?this.$set(this.expandList,e,this.expandState.EXPAND_OPEN):s===this.expandState.EXPAND_OPEN?this.$set(this.expandList,e,this.expandState.EXPAND_CLOSE):this.Toast("该分数段暂无学生"),this.clickExpendLog()},setResultColors:function(){var t=this.dataList.length,e=this.colors.slice(0,t-1);e.push({id:"21",color:"#c8c8c8"}),this.resultColors=e.sort(function(t,e){return t.id-e.id})},setLineArea:function(){for(var t=!1,e=0;e<this.dataList.length;e++){this.dataList[e].students.length>0?!1===t?(t=!0,this.$set(this.expandList,e,this.expandState.EXPAND_CLOSE)):this.$set(this.expandList,e,this.expandState.EXPAND_OPEN):this.$set(this.expandList,e,this.expandState.EXPAND_NO)}},getAcademicLevelList:function(){var t=this;i.default.getSubjectAcademicLevelInfo(this.examIdParam,this.classIdParam,this.topicSetIdParam).then(function(e){t.dataList=e,t.setResultColors(),t.setLineArea()}).catch(function(e){t.dataList=[],t.setResultColors(),t.setLineArea()})},fixNum:function(t,e){e=isNaN(e)?0:e,t=t.toFixed(2);var s=Math.pow(10,e);return Math.round(t*s)/s},clickExpendLog:function(){var e={};e.userId=n.default.getUserId(),e.examId=this.examIdParam,n.default.setLog(t.REPORT,t.APP_OPCODE.CODE_1025,(0,a.default)(e))}}}}).call(e,s("9AUj"))},T6yH:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("SnkI"),n=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);var c=s("e1/R");var o=function(t){s("R7EY")},r=s("C7Lr")(n.a,c.a,!1,o,"data-v-0c967f24",null);e.default=r.exports},"e1/R":function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t._m(0),t._v(" "),t.dataList.length>0?s("div",{staticClass:"stu_table"},[t._m(1),t._v(" "),t._l(t.dataList,function(e,a){return s("table",{key:a,staticClass:"table-normal"},[s("tr",{staticClass:"tr-normal"},[s("td",{staticClass:"sy1"},[s("div",{staticClass:"color-tag",style:{background:t.getRankColor(a)}}),t._v(" "),s("div",{staticClass:"rank-text",domProps:{textContent:t._s(e.levelName)}})]),t._v(" "),s("td",{staticClass:"sy2",domProps:{textContent:t._s(e.section)}}),t._v(" "),s("td",{staticClass:"sy3",domProps:{textContent:t._s(e.stuCount+"人")}}),t._v(" "),s("td",{staticClass:"sy4",domProps:{textContent:t._s(t.fixNum(e.stuRate,2)+"%")}}),t._v(" "),s("td",{staticClass:"sy5",on:{click:function(s){return t.clickExpandLine(e,a)}}},[s("span",{staticClass:"block",style:{color:t.expandList[a]===t.expandState.EXPAND_NO?"#ACBFCA":"#212426"},domProps:{textContent:t._s(t.getLineExpandText(e,a))}}),t._v(" "),s("i",{class:t.expandList[a]===t.expandState.EXPAND_CLOSE?"close":"open"})])]),t._v(" "),t.expandList[a]===t.expandState.EXPAND_CLOSE?s("tr",{staticClass:"tr-area"},[s("td",{staticClass:"td-area",attrs:{colspan:"5"}},t._l(e.students,function(a,n){return s("span",{key:n,staticClass:"stu_name",domProps:{textContent:t._s(a.userName)},on:{click:function(s){return t.clickStudent(n,e.students)}}})}),0)]):t._e()])})],2):s("exception-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("i"),this._v(" "),e("span",{staticClass:"text-ttile"},[this._v("学业等级分布")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"table-header"},[s("tr",{staticClass:"tr-header"},[s("td",{staticClass:"sy1"},[s("span",[t._v("等级")])]),t._v(" "),s("td",{staticClass:"sy2"},[t._v("分数区间")]),t._v(" "),s("td",{staticClass:"sy3"},[t._v("人数")]),t._v(" "),s("td",{staticClass:"sy4"},[t._v("占比")]),t._v(" "),s("td",{staticClass:"sy5"},[s("span",[t._v("操作")])])])])}]};e.a=a},fBsX:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,n=s("PLMy"),i=(a=n)&&a.__esModule?a:{default:a};e.default={name:"academicOverview",props:{examIdParam:{type:String,request:!1},classIdParam:{type:String,request:!1},subjectCodeParam:{type:String,request:!1}},data:function(){return{examId:"",classId:"",subjectCode:"",classAvgScore:"",gradeAvgScore:"",classRanking:"",totalClassNum:"",highestScore:"",gradeHighestScore:"",excellentRate:"",gradeExcellentRate:"",qualifiedRate:"",gradeQualifiedRate:"",schStudentCount:"",schSubmitStudentCount:"",absentStudentsCount:"",showAbsentStudents:[],dialogVisible:!1}},mounted:function(){this.examId=this.examIdParam,this.classId=this.classIdParam,this.subjectCode=this.subjectCodeParam,this.getNewSubjectExamSummary()},methods:{getNewSubjectExamSummary:function(){var t=this;i.default.getNewSubjectExamSummary(this.examId,this.classId,this.subjectCode).then(function(e){if(e&&e.permissionWapper){var s=e.permissionWapper,a=function(t,e){e=isNaN(e)?0:e;var s=Math.pow(10,e);return Math.round(t*s)/s};if(t.classAvgScore=s.classAvgScore?a(e.clsAvgScore,2):"--",t.gradeAvgScore=s.schoolAvgScore?a(e.schAvgScore,2):"--",t.classRanking=s.classAvgScoreRank?e.classRank:"--",t.totalClassNum=e.examClassCount,t.highestScore=s.maxScore?a(e.clsTopScore,2):"--",t.gradeHighestScore=s.schMaxScore?a(e.schTopSCore,2):"--",t.excellentRate=s.excellentEnable?a(100*e.clsExcellentRate,2):"--",t.gradeExcellentRate=s.schExcellent?a(100*e.schExcellentRate,2):"--",t.qualifiedRate=s.qualifiedEnable?a(100*e.clsPassRate,2):"--",t.gradeQualifiedRate=s.schQualified?a(100*e.schPassRate,2):"--",t.schStudentCount=e.schStudentCount,t.schSubmitStudentCount=e.schSubmitStudentCount,e.absentStudents&&(t.absentStudentsCount=e.absentStudents.length),e.absentStudents&&e.absentStudents.length>0){var n=void 0,i=t.showAbsentStudents;e.absentStudents.forEach(function(t,e){e%4==0?((n=[]).push(t),i.push(n)):n.push(t)}),t.absentStudents=e.absentStudents}}}).catch(function(t){})},openCallback:function(){$("body").css("position","fixed").css("width","100%")},closeCallback:function(){$("body").css("position","static").css("width","100%")}}}},ftJp:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("/WQb"),n=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);var c=s("4Kl7");var o=function(t){s("COwQ")},r=s("C7Lr")(n.a,c.a,!1,o,"data-v-1caa0694",null);e.default=r.exports},yZRW:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(s("wMq3")),n=r(s("/UYj")),i=r(s("ftJp")),c=r(s("T6yH")),o=r(s("9XEn"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={name:"index",components:{AcademicOverview:n.default,AttentionStudent:i.default,AcademicLevel:c.default,HighWrongTopic:o.default},data:function(){return{examId:"",classId:"",subjectCode:"",isShow:!1}},created:function(){window.onTokenAccess=this.onTokenAccess()},mounted:function(){if(this.backTop(),this.examId=this.getUrlKey("examId"),this.classId=this.getUrlKey("classId"),this.subjectCode=this.getUrlKey("subjectCode"),a.default.state.token=this.getUrlKey("token"),this.setShow(!0),window.AppKSBGInterface){var t=window.AppKSBGInterface;t.dismissLoadingForJS&&t.dismissLoadingForJS()}},methods:{getUrlKey:function(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(window.location.href)||[,""])[1].replace(/\+/g,"%20"))||null},setShow:function(t){var e=this;this.isShow=!t,this.$nextTick(function(){e.isShow=t})},onTokenAccess:function(t,e){a.default.state.token=e,console.log("onTokenAccess"),this.setShow(!0)},backTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}}}},zcLb:function(t,e){}});