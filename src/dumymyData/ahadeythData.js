const data =[
    {
        id : 1,
        hadeth : " (إِذَا مَاتَ الإنْسَانُ انْقَطَعَ عنْه عَمَلُهُ إِلَّا مِن ثَلَاثَةٍ: إِلَّا مِن صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَد صَالِحٍ يَدْعُو له)"
    },
    {
        id : 2,
        hadeth : "(سلُوا اللهَ علمًا نافعًا، وتَعَوَّذُوا باللهِ منْ علمٍ لا ينفعُ)"
    },
    {
        id : 3,
        hadeth : "(سيأتيكُم أقوامٌ يطلبونَ العِلمَ، فإذا رأيتُموهم؛ فقولوا لَهُم مَرحبًا مَرحبًا بوصيَّةِ رسولِ اللَّهِ صلَّى اللَّهُ عليهِ وسلَّمَ، واقْنوهُم)"
    },
    {
        id : 4,
        hadeth : "(لا تَجْعَلُوا بُيُوتَكُمْ مَقابِرَ، إنَّ الشَّيْطانَ يَنْفِرُ مِنَ البَيْتِ الذي تُقْرَأُ فيه سُورَةُ البَقَرَةِ)"
    },
    {
        id : 5,
        hadeth : "(نضَّرَ اللَّهُ امرأً سمِعَ منَّا حديثًا فحفِظَهُ حتَّى يبلِّغَهُ غيرَهُ، فرُبَّ حاملِ فقهٍ ليسَ بفَقيهٍ، ورُبَّ حاملِ فقهٍ إلى من هوَ أفقَهُ منهُ)"
    },
    {
        id : 6,
        hadeth : "(لأَنْ أَقُولَ سُبْحَانَ اللهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، أَحَبُّ إِلَيَّ ممَّا طَلَعَتْ عليه الشَّمْسُ)"
    },
    {
        id : 7,
        hadeth : "(إنْ قامَتِ الساعةُ وفي يدِ أحدِكمْ فَسِيلةٌ، فإنِ استطاعَ أنْ لا تقومَ حتى يَغرِسَها فلْيغرِسْهَا)"
    },
    {
        id : 8,
        hadeth : "(لَأَنْ يَحْتَطِبَ أَحَدُكُمْ حُزْمَةً علَى ظَهْرِهِ، خَيْرٌ له مِن أَنْ يَسْأَلَ أَحَدًا فيُعْطِيَهُ أَوْ يَمْنَعَهُ)"
    },
    {
        id : 9,
        hadeth : "(فِي الجَنَّةِ ثَمَانِيَةُ أبْوَابٍ، فِيهَا بَابٌ يُسَمَّى الرَّيَّانَ، لا يَدْخُلُهُ إلَّا الصَّائِمُونَ)"
    },
    {
        id : 11,
        hadeth : " عن النبي صلى الله عليه وسلم قال: (إن الله تعالى يبسط يده بالليل ليتوب مسيء النهار، ويبسط يده بالنهار ليتوب مسيء الليل، حتى تطلع الشمس من مغربها) رواه مسلم."
    },
    {
        id : 12,
        hadeth : "أن رسول الله صلى الله عليه وسلم قال: (يضحك الله سبحانه وتعالى إلى رجلين يقتل أحدهما الآخر يدخلان الجنة، يقاتل هذا في سبيل الله فيقتل، ثم يتوب الله على القاتل فيسلم فيستشهد) متفق عليه."
    },
    {
        id : 13,
        hadeth : "قال رسول الله صلى الله عليه وسلم :(عجبا لأمر المؤمن إن أمره كله له خير وليس ذلك لأحد إلا للمؤمن: إن أصابته سراء شكر فكان خيرا له، وإن أصابته ضراء صبر فكان خيرا له) رواه مسلم."
    },
    {
        id : 14,
        hadeth : "سمعت رسول الله صلى الله عليه وسلم يقول: (إن الله عز وجل قال: إذا ابتليت عبدي بحبيبتيه فصبر عوضته منهما الجنة) يريد عينيه، رواه البخاري."
    },

    {
        id : 15,
        hadeth : "كأني أنظر إلى رسول الله صلى الله عليه وسلم يحكي نبيا من الأنبياء، صلوات الله وسلامه عليهم، ضربه قومه فأدموه، وهو يمسح الدم عن وجهه، يقول: (اللهم اغفر لقومي، فإنهم لا يعلمون) متفق عليه."
    },
    {
        id : 16,
        hadeth : "دخلت على النبي صلى الله عليه وسلم وهو يوعك، فقلت: يا رسول الله، إنك توعك وعكا شديدا، قال: (أجل، إني أوعك كما يوعك رجلان منكم) قلت: ذلك أن لك أجرين؟ قال: (أجل، ذلك كذلك، ما من مسلم يصيبه أذى، شوكة فما فوقها إلا كفر الله بها سيئاته، وحطت عنه ذنوبه كما تحط الشجرة ورقها) متفق عليه. و(الوعك): مغث الحمى، وقيل: الحمى."
    },
    {
        id : 17,
        hadeth : "قال رسول الله صلى الله عليه وسلم: (من يرد الله به خيرا يصب منه) رواه البخاري. وضبطوا (يصب) بفتح الصاد وكسرها."
    },
    {
        id : 18,
        hadeth : "قال رسول الله صلى الله عليه وسلم: (لا يتمنين أحدكم الموت لضر أصابه، فإن كان لا بد فاعلا، فليقل: اللهم أحيني ما كانت الحياة خيرا لي، وتوفني إذا كانت الوفاة خيرا لي) متفق عليه."
    },
    {
        id : 19,
        hadeth : "أن رجلا قال للنبي صلى الله عليه وسلم: أوصني. قال: (لا تغضب) فردد مرارا، قال: (لا تغضب) رواه البخاري."
    },
    {
        id : 20,
        hadeth : "قال رسول الله صلى الله عليه وسلم: (ما يزال البلاء بالمؤمن والمؤمنة في نفسه وولده وماله حتى يلقى الله تعالى وما عليه خطيئة) رواه الترمذي، وقال: (حديث حسن صحيح)."
    },
    {
        id : 21,
        hadeth : "عن النبي صلى الله عليه وسلم قال: (إن الصدق يهدي إلى البر، وإن البر يهدي إلى الجنة، وإن الرجل ليصدق حتى يكتب عند الله صديقا. وإن الكذب يهدي إلى الفجور، وإن الفجور يهدي إلى النار، وإن الرجل ليكذب حتى يكتب عند الله كذابا) متفق عليه."
    },
    {
        id : 22,
        hadeth : "حفظت من رسول الله صلى الله عليه وسلم: (دع ما يريبك إلى ما لا يريبك؛ فإن الصدق طمأنينة، والكذب ريبة) رواه الترمذي، وقال: (حديث صحيح). قوله: (يريبك) هو بفتح الياء وضمها: ومعناه اترك ما تشك في حله واعدل إلى ما لا تشك فيه."
    },
    {
        id : 23,
        hadeth : "عن رسول الله صلى الله عليه وسلم قال: (اتق الله حيثما كنت وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن) رواه الترمذي، وقال: (حديث حسن)."
    },
    {
        id : 24,
        hadeth : "إنكم لتعملون أعمالا هي أدق في أعينكم من الشعر، كنا نعدها على عهد رسول الله صلى الله عليه وسلم من الموبقات. رواه البخاري. وقال: (الموبقات) : المهلكات."
    },
    {
        id : 25,
        hadeth : "قال رسول الله صلى الله عليه وسلم: (من حسن إسلام المرء تركه ما لا يعنيه) حديث حسن رواه الترمذي وغيره."
    },
    {
        id : 26,
        hadeth : "عن النبي صلى الله عليه وسلم قال: (لا يسأل الرجل فيم ضرب امرأته) رواه أبو داود وغيره."
    },
    {
        id : 27,
        hadeth : "عن النبي صلى الله عليه وسلم قال: (إن الدنيا حلوة خضرة، وإن الله مستخلفكم فيها فينظر كيف تعملون، فاتقوا الدنيا واتقوا النساء؛ فإن أول فتنة بني إسرائيل كانت في النساء) رواه مسلم."
    },
    {
        id : 28,
        hadeth : "سمعت رسول الله صلى الله عليه وسلم يقول: (من حلف على يمين ثم رأى أتقى لله منها فليأت التقوى) رواه مسلم."
    },
    {
        id : 29,
        hadeth : "سمعت رسول الله صلى الله عليه وسلم يخطب في حجة الوداع، فقال: (اتقوا الله وصلوا خمسكم، وصوموا شهركم، وأدوا زكاة أموالكم، وأطيعوا أمراءكم تدخلوا جنة ربكم) رواه الترمذي، في آخر كتاب الصلاة، وقال: (حديث حسن صحيح)."
    },
    {
        id : 30,
        hadeth : "أن رسول الله صلى الله عليه وسلم كان يقول: (اللهم لك أسلمت، وبك آمنت، وعليك توكلت، وإليك أنبت، وبك خاصمت. اللهم أعوذ بعزتك؛ لا إله إلا أنت أن تضلني، أنت الحي الذي لا تموت، والجن والإنس يموتون) متفق عليه، وهذا لفظ مسلم واختصره البخاري."
    },
];

export default data;