MWF.xApplication.Attendance.LP = {
	"title": "考勤管理",
	"delete" : "删除",
	"deleteDocumentTitle": "删除确认",
	"deleteDocument": "您确定要删除该信息吗?",
	"deleteDocumentOK": "删除成功",
	"createSuccess" : "创建成功",
	"updateSuccess" : "更新成功",
	"inputName" : "请输入名称",

	"dateFormatMonth": "%Y年%m月",
	"dateFormatOnlyMonth": "%m",
	"dateFormatDay": "%Y-%m-%d",
	"dateFormatMonthDayLocal": "%m月%d日",
	"dateFormat": "db",

	"month" : "月",
	"today" : "今天",
	"day" : "天",

	"cancel" : "取消",
	"ok" : "确定",

	"create_cancel_title": "取消新建确认",
	"create_cancel": "您确定要取消新建吗?",

	"normal" : "出勤", //绿色，正常
	"levelAsked":"请假或外出报备", //蓝色，请假
	"late":"迟到", //橙色，迟到
	"leaveEarly":"早退", //橙色，早退
	"noSign":"缺勤", //粉红色,未签到
	"appealSuccess" : "申诉通过",
	"lackOfTime" : "工时不足",
	"abNormalDuty" : "异常打卡",

	"absent" : "缺勤",
	"notAbsent" : "未缺勤",

	"attendanceStatisic" : "考勤统计",
	"name" : "姓名",
	"onDutyTimes" : "上班打卡次数",
	"offDutyTimes" : "下班打卡次数",
	"onDutyDayCount" : "出勤人天数",
	"onSelfHolidayCount" : "请假或外出报备人天数",
	"absenceDayCount" : "缺勤人天数",
	"lateTimes" : "迟到次数",
	"leaveEarlyTimes" : "早退次数",
	"lackOfTimeCount" : "工时不足人次",
	"abNormalDutyCount" : "异常打卡人次",
	"resultNormal" : "正常打卡次数",
	"seriousLateTimes": "严重迟到次数",
	"leaveEarlyTimes": "早退次数",
	"absenteeismTimes": "矿工次数",
	"notSignedCount": "未打卡次数",

	"topUnitAttendanceDetail" : "公司出勤明细",
	"topUnitAttendanceStatic" : "公司出勤率统计",
	"staticByDay" : "按日统计",
	"staticByMonth" : "按月统计",
	"type": "类型",
	"topUnit" : "公司",
	"unit" : "部门",
	"annuaal" : "年度",
	"months" : "月份",
	"date": "日期",
	"seeSchedule" : "查看排班时间表",
	"unfindSchedule" : "未找到您所在部门和公司的排班表",
	"scheduleTable" : "排班时间表",
	"signTime" : "打卡时间",
	"appeal" : "申诉",

	"index" : {
		"attendanceCalendar":"考勤日历",
		"pieChart" : "考勤汇总",
		"lineChart" : "上下班走势",
		"absent":"缺勤",
		"offDutyTime":"出勤，打卡时间：",
		"levelAsked":"请假或外出报备"
	},

	"schedule" : {
		"inputVaild" : "单位、上班时间、下班时间、迟到起算时间、旷工起算时间均不能为空",
		"setSchedule" : "排班设置",
		"unit" : "单位",
		"workTime" : "上班时间",
		"offTime" : "下班时间",
		"lateTime":"迟到起算时间",

		"leaveEarlyTime":"早退起算时间",
		"absenteeismTime":"缺勤起算时间",
		"illegal":{
			"1":["下班时间不得早于上班时间"],
			"2":["午休开始时间不得早于上班时间","午休结束时间不得早于午休开始时间","下班时间不得早于午休结束时间"],
			"3":["上午下班时间不得早于上班时间","下午上班时间不得早于上午下班时间","下班时间不得早于下午上班时间"]
		},
		"lateStartTime":"上午迟到起算时间",
		"leaveEarlyStartTime":"下午早退起算时间",
		"leaveEarlyStartTimeMorning":"上午早退起算时间",
		"lateStartTimeAfternoon":"下午迟到起算时间",
		"signProxy":{
			"name":"打卡策略",
			"select":{
				"1":"两次打卡（上午上班，下午下班）",
				"2":"三次打卡（上午上班，下午下班加中午一次共三次）",
				"3":"四次打卡（上午下午都打上班下班卡）"
			},
			"2":{
				"middayRestStartTime":"午休开始时间",
				"middayRestEndTime":"午休结束时间",
			},
			"3":{
				"middayRestStartTime":"上午下班时间",
				"middayRestEndTime":"下午上班时间",
			}
		}
		//"" : "打卡有效时间",
		//"" : "从",
		//"" : "到",
		//"" : "旷工",
		//"" : "上班缺勤",
		//"" : "下班缺勤",
		//"" : "上下班均缺勤"
	},
	"holiday" : {
		"inputValid" : "年度、假期名称、开始时间、结束时间必填，请填写！",
		"setHoliday" : "法定假期设置",
		"year" : "年度",
		"name" : "假期名称",
		"startDate" : "开始日期",
		"endDate" : "结束日期",
		"makeUpClassDay" : "补班日期",
		"holidaySchedule" : "假期安排"
	},
	"permission" : {
		"setAttendancer" : "考勤员设置",
		"role" : "角色",
		"personName" : "人员",
		"unit" : "单位"
	},
	"selfHoliday" : {
		"inputValid" : "部门、员工姓名、休假类型、开始时间、结束时间、休假天数必填，请填写！"
	},
	"nextActivity": "下一个活动：",
	"nextUser": "处理人：",
	"deal": "处理",
	"processStarted": "文件已启动",
	"processStartedMessage": "您启动了一个新的工作："
};