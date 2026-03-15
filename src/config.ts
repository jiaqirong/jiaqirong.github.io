export const siteConfig = {
  name: "荣嘉琪",
  title: "产品经理（春招求职中）",
  description: "荣嘉琪的产品经理个人网站，聚焦增长、地图与智能策略产品实践",
  accentColor: "#0f766e",
  photo: "/photos/photo-01.jpeg",
  homePhotos: [
    "/photos/IMG_6761.JPG",
    "/photos/photo-01.jpeg",
    "/photos/photo-03.jpeg",
    "/photos/photo-04.jpeg",
    "/photos/photo-05.jpeg",
    "/photos/photo-06.jpeg",
    "/photos/photo-07.jpeg",
  ],
  social: {
    email: "rongjiaqi@bupt.edu.cn",
    github: "https://github.com/jiaqirong",
    homepage: "https://jiaqirong.github.io/",
  },
  aboutMe:
    "北京邮电大学硕士在读，主攻产品策略与增长。具备地图物流、即时配送、会员增长与智能交互场景经验，擅长把模糊业务问题拆解为可落地方案，通过数据分析、AB实验与跨团队协作推动结果交付。熟练使用 AI 工具提升产研效率（OpenClaw 自动化工作流 + AI Coding / vibe coding 快速原型）。",
  skills: [
    "需求分析与方案拆解",
    "产品策略与增长设计",
    "PRD/原型设计（Axure/Visio）",
    "SQL/Excel 数据分析",
    "A/B 测试与指标设计",
    "跨团队推进与项目管理",
    "AI 产品化（LLM/Prompt）",
    "AI Coding / vibe coding（快速原型、脚本自动化）",
    "OpenClaw 自动化工作流（信息检索/投递协作/提醒与整理）",
  ],
  projects: [
    {
      name: "揽收点智能判重及聚合（Shopee 马来西亚）",
      description:
        "围绕“冗余揽收点导致人工审核负担重、司机取货效率低”的问题，推动存量清洗+增量实时判重的一体化方案落地。上线后合并准确率达到 Algo 99.9%（人工 83.6%），实现人工审核环节替代并提升取货效率。",
      skills: ["策略设计", "地址判重", "ES 索引", "跨团队协作"],
    },
    {
      name: "用户分层激励及运营平台建设（京东 1号会员店）",
      description:
        "针对京东 APP 店铺“无差别促销难以服务不同用户”的问题，识别首页访客、活动参与者、多次触达未转化用户三类高潜人群，推动 7 天会员试用卡分层激励并完成 AB 验证（转化率提升 10 倍）。策略验证后进一步推动运营中台平台化建设，覆盖权益中心、用户圈选、策略中心、任务调度和数据看板，首月支撑超 10 万次精准触达，日新增付费会员提升 73%。",
      skills: ["用户分层", "AB 测试", "运营中台", "策略平台化"],
    },
    {
      name: "商详页改版升级与 AI 内容优化（京东 1号会员店）",
      description:
        "针对商详页内容同质化、用户决策成本高的问题，参与自营商品商详页改版，新增“必买攻略”“买手教挑”等内容模块，并结合 AI 模型提升内容质量。灰度对比显示商详页停留时长提升 1.8 秒，购买转化率提升 10%。",
      skills: ["商详页改版", "内容策略", "AI 内容能力", "灰度验证"],
    },
  ],
  vibeCoding: [
    {
      name: "Vibe Coding 开发个人作品集网站（Astro + Tailwind）",
      dateRange: "2026.02 - 2026.03",
      description:
        "使用 AI Coding / vibe coding 方式快速完成页面结构搭建与内容配置，沉淀可复用模板，将个人经历/项目结构化呈现并支持持续迭代。",
      bullets: [
        "将个人信息、技能、项目与经历抽象为配置（config 驱动），降低维护成本。",
        "结合静态站生成与组件化开发，快速迭代信息表达与信息层级。",
        "通过 GitHub Pages 持续部署，让简历与作品集保持同步更新。",
      ],
      links: [
        { label: "个人主页", href: "https://jiaqirong.github.io/" },
      ],
    },
    {
      name: "部署 OpenClaw：自动化求职投递与信息整理",
      dateRange: "2026.03",
      description:
        "基于 OpenClaw 搭建个人自动化助手工作流，用于招聘官网投递协作、岗位检索与投递记录整理；在需要短信/图形验证码时由人工接管，保证合规与稳定。",
      bullets: [
        "将高频重复操作（筛选岗位、填写信息、跟踪投递状态）流程化/自动化。",
        "通过 hooks/定时任务/会话管理提升投递效率与可追溯性。",
        "结合大模型能力进行 JD 匹配、话术生成与材料迭代。",
      ],
    },
  ],
  researchProjects: [
    {
      name: "ONU终端与可见光异构融合组网关键技术研发",
      role: "团队负责人",
      dateRange: "2024.07 - 2026.12",
      description:
        "面向家庭场景设计可见光通信解决方案,通过“感知-通信-照明一体化”架构,实现全屋高质量无死角网络覆盖(支持50+设备并发接入),用户投诉率降低50%,并成为深圳市运营商‘千兆光网’试点推荐方案。",
      bullets: [
        "通过竞品分析和用户需求调研,结合SWOT模型明确产品核心价值,主导完成商业企划书和可行性报告,推动项目立项;",
        "负责可见光终端架构设计,提出动态组网机制和协议,解决传统光纤部署高成本低灵活性的痛点,实现家庭场景下全屋覆盖率提升40%,并通过感通照一体化模型降低用户侧设备成本20%;",
        "制作课题答辩PPT,向投资方和技术评审传递产品价值,推动项目纳入深圳市科技重大专项,获研发预算支持500万元。",
      ],
    },
    {
      name: "实现1Gbps传输的OFDM实时双向可见光通信系统",
      role: "团队成员",
      dateRange: "2022.10 - 2023.12",
      description:
        "从0到1自主设计、研发了一套面向6G的可见光通信移动样机平台,结合技术趋势和市场需求,实现了千兆以太网实时视频业务传输功能,解决了当前射频频谱短缺的行业痛点,为未来6G通信技术的商业化应用提供可行方案。",
      bullets: [
        "负责业务需求对接和管理工作,及时满足客户的新需求,推动迭代十余个版本;",
        "负责设计整体系统及交互方式,结合业务要求,研发了动态网络分配、实时高清4K视频传输等区别于竞品的特色功能;",
        "试制小批量样机,作为新频谱应用案例在中国移动6G开放实验室和中关村泛联移动通信研究院部署,应用于校内多媒体教室与活动直播,满意度提升至90%以上。",
      ],
    },
  ],
  papers: [
    {
      title: "Research on image compression technique by deep learning algorithm with semantic coding and d ecoding",
      venue: "PhotonIcs and Electromagnetics Research Symposium",
      authorship: "一作",
    },
    {
      title: "Experimental Research on Image Transmission with High Compressive Rate in a Semantic Visible Light Communication System",
      venue: "2024 14th International Symposium on Communication Systems, Networks and Digital Signal Processing (CNSDSP)",
    },
  ],
  patents: [
    {
      title: "（公开）一种可见光通信传输方法、装置、电子设备和存储介质",
      pubNo: "CN119051747A",
      abstract:
        "本发明提供一种可见光通信传输方法、装置、电子设备和存储介质，涉及无线通信技术领域。该方法包括：获取目标图像数据；基于特征提取网络提取语义信息得到语义特征；基于语义特征生成待发送数据；利用可见光介质向接收端发送待发送数据。本发明可在保持较低误码率与较远传输距离的条件下，提高系统传输比特率。",
    },
  ],
  experience: [
    {
      company: "Shopee 北京研发中心（Map 地图组）",
      title: "技术产品经理（实习）",
      dateRange: "2025.05 - 至今",
      bullets: [
        "主导揽收点判重聚合方案，从业务目标拆解到技术落地，构建存量清洗+增量实时判重机制。",
        "推动 ES 索引与业务操作实时同步，降低海量动态数据同步复杂度。",
        "推动配送路径方案评估，验证 Inhouse-bike 路径在时效与成本上的优势并给出上线依据。",
      ],
    },
    {
      company: "京东零售（大商超事业群，1号会员店）",
      title: "用户增长产品实习生",
      dateRange: "2025.02 - 2025.05",
      bullets: [
        "提出并推动 7 天会员试用卡分层激励策略，面向高潜未转化用户设计差异化转化路径。",
        "将人工运营动作沉淀为平台化能力，覆盖权益中心、用户圈选、策略中心、任务调度与看板。",
        "参与商详页改版与 AI 内容能力接入，提升页面停留时长与购买转化率。",
      ],
    },
    {
      company: "美团（金融服务平台，智能交互组）",
      title: "产品实习生",
      dateRange: "2024.04 - 2024.08",
      bullets: [
        "参与机器学习平台能力优化，完善流量录制/回放能力，支持算法策略更高频迭代。",
        "推动催收机器人接入 KYC agent 策略，沉淀业务经验为 Prompt 模板并提升策略一致性。",
        "参与轻量化模型部署与置信度机制设计，在保证效果前提下降低推理成本 25%。",
      ],
    },
  ],
  education: [
    {
      school: "北京邮电大学",
      degree: "硕士｜新一代电子信息技术",
      dateRange: "2023.09 - 2026.06（预计）",
      achievements: [
        "加权平均分 93.86，GPA 3.8/4.0",
        "2023 级硕士团支部总书记，组织十余场线上线下活动",
        "中国国际“互联网+”大学生创新创业大赛国家级银奖",
      ],
    },
    {
      school: "北京邮电大学",
      degree: "本科｜电磁场与无线技术",
      dateRange: "2019.09 - 2023.06",
      achievements: [
        "加权平均分 88.95，GPA 3.6/4.0",
        "校级一、二等奖学金，优秀团员",
        "北京 2022 冬奥会/冬残奥会优秀志愿者",
      ],
    },
  ],
};
