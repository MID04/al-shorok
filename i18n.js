/* Locale layer for the static English page and Arabic route. */
(function () {
  "use strict";
  const isAr = new URLSearchParams(location.search).get("lang") === "ar" || location.pathname.split("/").includes("ar") || document.documentElement.lang === "ar";
  const dict = {
    "Menu":"القائمة","Home":"الرئيسية","About":"من نحن","Products":"المنتجات","Industries":"القطاعات","Projects":"المشروعات","Clients":"عملاؤنا","Contact":"تواصل معنا","Request a Quote":"اطلب عرض سعر",
    "Industrial Tools,":"الأدوات الصناعية،","Equipment &":"والمعدات،","Materials Supply":"وتوريد الخامات",
    "Reliable industrial supply for construction, infrastructure and industrial projects across Egypt.":"توريد موثوق للأدوات والمعدات الصناعية لمشروعات الإنشاءات والبنية التحتية والصناعة في أنحاء مصر.",
    "Industrial Supply. Built on Experience.":"توريدات صناعية. خبرة يُعتمد عليها.","Explore Our Projects":"استكشف مشروعاتنا","Zohr Natural Gas Project — Port Said":"مشروع غاز ظهر — بورسعيد",
    "Years in the Egyptian market":"عامًا في السوق المصري","Industrial & residential projects":"مشروع صناعي وسكني",
    "About Al-Shorouk":"عن الشروق","An industrial supplier built for project requirements.":"مورد صناعي يلبي متطلبات المشروعات.",
    "Headquartered in Downtown Cairo, Al-Shorouk Trading & Supplies has operated in the Egyptian market for over 20 years and has contributed to more than 100 industrial and residential projects nationwide.":"تتخذ شركة الشروق للتجارة والتوريدات من وسط القاهرة مقرًا لها، وتعمل في السوق المصري منذ أكثر من 20 عامًا، وأسهمت في أكثر من 100 مشروع صناعي وسكني في أنحاء الجمهورية.",
    "We are an authorized distributor for leading brands in our field, supporting procurement teams with competitive pricing, responsive supply, warranties and after-sales service.":"نحن موزع معتمد لعلامات تجارية رائدة في مجالنا، وندعم فرق المشتريات بأسعار تنافسية وتوريد سريع وضمان وخدمة ما بعد البيع.",
    "Why Al-Shorouk":"لماذا الشروق؟","How an inquiry works":"كيف تتم عملية التوريد؟","Your requirement":"متطلباتك","Share products, quantities and delivery needs.":"أرسل المنتجات والكميات واحتياجات التسليم.",
    "Sourcing":"توفير المنتجات","We source what your project asks for.":"نوفر ما يحتاجه مشروعك.","Quotation":"عرض السعر","Pricing and availability for your project.":"الأسعار ومدى التوفر لمشروعك.","Supply":"التوريد","Fast supply and execution turnaround.":"توريد سريع وإنجاز في الوقت المحدد.","Support":"الدعم","Warranties and after-sales service.":"الضمان وخدمة ما بعد البيع.",
    "Supply Categories":"فئات التوريد","What we supply.":"ما الذي نورّده؟","Tell us what you need. We'll source and supply it.":"أخبرنا باحتياجاتك وسنعمل على توفيرها.",
    "Industries We Serve":"القطاعات التي نخدمها","Sector experience across five industries.":"خبرة في خمسة قطاعات.",
    "Power Generation":"توليد الطاقة","Tools, materials and safety equipment for power station construction and works.":"أدوات وخامات ومعدات سلامة لإنشاء محطات الكهرباء وأعمالها.",
    "Cement Manufacturing":"صناعة الأسمنت","Supply for cement plant projects, including factories in Beni Suef and El-Arish.":"توريد لمشروعات مصانع الأسمنت، ومنها مصانع بني سويف والعريش.",
    "Petroleum":"البترول","Supply for oil and gas projects, including work in Port Said and Damietta.":"توريد لمشروعات النفط والغاز، ومنها أعمال في بورسعيد ودمياط.",
    "Ports":"الموانئ","Supply for port projects, including Damietta Port Phases I & II.":"توريد لمشروعات الموانئ، ومنها المرحلتان الأولى والثانية من ميناء دمياط.",
    "Residential Construction":"الإنشاءات السكنية","Tools and materials for residential building projects across Egypt.":"أدوات وخامات لمشروعات البناء السكني في أنحاء مصر.",
    "Selected Projects":"مشروعات مختارة","Real projects. Real supply experience.":"مشروعات حقيقية. وخبرة فعلية في التوريد.","Filter projects":"تصفية المشروعات",
    "Photographs are matched to projects by file name; project descriptions are limited to what is verified. Detailed Al-Shorouk scope per project will be added once confirmed.":"تُعرض الصور مع المشروعات المطابقة لها. تقتصر الأوصاف على المعلومات المؤكدة، وستُضاف تفاصيل نطاق توريد الشروق لكل مشروع بعد التحقق منها.",
    "Clients & Business Relationships":"العملاء وعلاقات الأعمال","Selected clients.":"مجموعة من عملائنا.","Organizations Al-Shorouk has supplied. Logos are shown for identification only and do not imply endorsement.":"جهات قامت الشروق بتوريد المنتجات إليها. تُعرض الشعارات للتعريف فقط ولا تعني وجود اعتماد أو تزكية.",
    "Petrojet (all branches)":"بتروجيت (جميع الفروع)","SIAC Construction":"سياك للإنشاءات","GS (Korea)":"جي إس (كوريا)","Greater Cairo Sanitary Drainage Co.":"شركة الصرف الصحي للقاهرة الكبرى","Military production factories":"مصانع الإنتاج الحربي",
    "Experience you can build a supply chain on.":"خبرة يمكنك الاعتماد عليها في سلسلة التوريد.","20+ years of experience":"أكثر من 20 عامًا من الخبرة","Operating in the Egyptian market for over two decades.":"نعمل في السوق المصري منذ أكثر من عقدين.","100+ projects":"أكثر من 100 مشروع","Industrial and residential projects across Egypt.":"مشروعات صناعية وسكنية في أنحاء مصر.",
    "Authorized distribution":"توزيع معتمد","Authorized distributor for leading brands in our field.":"موزع معتمد لعلامات تجارية رائدة في مجالنا.","Competitive pricing":"أسعار تنافسية","Pricing suited to large-scale projects.":"أسعار مناسبة للمشروعات الكبرى.","Responsive supply":"توريد سريع","Fast supply and execution turnaround.":"سرعة في التوريد والتنفيذ.","Warranties & after-sales":"الضمان وخدمة ما بعد البيع","Warranty and after-sales service support.":"دعم الضمان وخدمات ما بعد البيع.",
    "Tell us what your project needs.":"أخبرنا باحتياجات مشروعك.","Share your requirements with our team for a tailored industrial supply inquiry.":"شارك متطلباتك مع فريقنا للحصول على عرض توريد صناعي مناسب لمشروعك.",
    "Full name *":"الاسم بالكامل *","Company name *":"اسم الشركة *","Work email *":"البريد الإلكتروني للعمل *","Phone number *":"رقم الهاتف *","Department / job title":"القسم / المسمى الوظيفي","Project name":"اسم المشروع","Project location":"موقع المشروع","Required delivery date":"موعد التسليم المطلوب","Required product or material *":"المنتج أو الخامة المطلوبة *","Estimated quantity":"الكمية التقديرية","Additional requirements":"متطلبات إضافية",
    "Prepare my request":"جهّز طلبي","Send via WhatsApp":"أرسل عبر واتساب","Speak with our team.":"تواصل مع فريقنا.","Email":"البريد الإلكتروني","Phone":"الهاتف","WhatsApp":"واتساب","Address":"العنوان","Meeting":"الاجتماع",
    "Online booking is not configured yet. Please contact us by phone, WhatsApp or email to arrange a meeting.":"لم يتم إعداد الحجز الإلكتروني بعد. يُرجى التواصل معنا هاتفيًا أو عبر واتساب أو البريد الإلكتروني لترتيب اجتماع.",
    "Explore":"استكشف","All rights reserved.":"جميع الحقوق محفوظة.","Sections":"الأقسام","Project photos":"صور المشروعات","Close":"إغلاق","Request a quote":"اطلب عرض سعر","Project photo pending":"صورة المشروع قيد الإضافة","View projects":"عرض المشروعات",
    "This field is required.":"هذا الحقل مطلوب.","Enter a valid email address.":"أدخل بريدًا إلكترونيًا صحيحًا.","Hand Tools":"الأدوات اليدوية","Welding Equipment":"معدات اللحام","Carbide Tools":"أدوات الكربيد","Plumbing Tools & Supplies":"أدوات ومستلزمات السباكة","Iron & Steel":"الحديد والصلب","Paints":"الدهانات","Lifting Equipment":"معدات الرفع","Industrial Safety Gear":"معدات السلامة الصناعية",
    "All":"الكل","Cement":"الأسمنت","Petroleum & Gas":"البترول والغاز","Industrial":"الصناعة","Zohr Natural Gas Project":"مشروع غاز ظهر","Port Said":"بورسعيد","Damietta Port (Phases I & II)":"ميناء دمياط (المرحلتان الأولى والثانية)","Damietta":"دمياط","Damietta Gas Pipelines":"خطوط أنابيب غاز دمياط","Beni Suef & El-Arish Cement Factories":"مصانع أسمنت بني سويف والعريش","Beni Suef / El-Arish":"بني سويف / العريش","Mostorod Power Station":"محطة كهرباء مسطرد","Mostorod":"مسطرد","Petrobel Projects":"مشروعات بتروبل","East El-Tafriaa Projects":"مشروعات شرق التفريعة",
    "Attach RFQ documents (PDF, DOC, DOCX, XLS, XLSX, JPG, PNG · max 10 MB each)":"إرفاق مستندات طلب عرض السعر (PDF، DOC، DOCX، XLS، XLSX، JPG، PNG — بحد أقصى 10 ميجابايت للملف)",
    "This page is not yet connected to a form server. Submitting opens your email app with the request filled in; nothing is sent until you press send there. Attachments are not transmitted by this page — attach them to the email or WhatsApp message.":"هذا النموذج غير متصل بخادم لإرسال الطلبات. عند الإرسال، سيفتح تطبيق البريد برسالتك جاهزة؛ لن يُرسل شيء حتى تضغط إرسال. لا تُرفق الملفات تلقائيًا، لذا أضفها إلى رسالة البريد أو واتساب.",
    "Industrial Tools, Equipment & Materials Supply for construction, infrastructure and industrial projects in Egypt.":"توريد الأدوات والمعدات والخامات الصناعية لمشروعات الإنشاءات والبنية التحتية والصناعة في مصر.",
    "Al-Shorouk Trading & Supplies. All rights reserved.":"الشروق للتجارة والتوريدات. جميع الحقوق محفوظة.",
    "Petroleum & Gas · Port Said":"البترول والغاز · بورسعيد","Ports · Damietta":"الموانئ · دمياط","Petroleum & Gas · Damietta":"البترول والغاز · دمياط","Cement · Beni Suef / El-Arish":"الأسمنت · بني سويف / العريش","Power Generation · Mostorod":"توليد الطاقة · مسطرد","Ports · Port Said":"الموانئ · بورسعيد",
    "Your email app should now open with the request filled in. If it does not, use the":"من المفترض أن يفتح تطبيق البريد برسالتك جاهزة. إذا لم يحدث ذلك، استخدم","button or email":"أو راسلنا عبر البريد الإلكتروني على","Nothing has been sent until you send it.":"لن يُرسل شيء حتى تضغط إرسال."
  };
  const attrs = {"Menu":"القائمة","Main":"القائمة الرئيسية","Sections":"الأقسام","Filter projects":"تصفية المشروعات","Selected clients":"عملاؤنا المختارون","Project photos":"صور المشروعات","Close":"إغلاق","Al-Shorouk Trading & Supplies - home":"الشروق للتجارة والتوريدات - الرئيسية","Al-Shorouk Trading & Supplies logo":"شعار الشروق للتجارة والتوريدات","Zohr CCP offshore platform in the Mediterranean":"منصة غاز ظهر البحرية في البحر المتوسط"};
  window.siteLocale = isAr ? "ar" : "en";
  window.siteTranslate = s => isAr ? (dict[s] || s) : s;
  if (isAr) {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    document.title = "الشروق للتجارة والتوريدات | توريدات صناعية في مصر";
    const desc = "الشروق للتجارة والتوريدات توفر الأدوات والمعدات والخامات الصناعية لمشروعات الإنشاءات والبنية التحتية والصناعة في مصر. تواصل معنا لطلبات التوريد وعروض الأسعار.";
    const dm = document.querySelector('meta[name="description"]');
    const ogt = document.querySelector('meta[property="og:title"]');
    const ogd = document.querySelector('meta[property="og:description"]');
    const can = document.querySelector('link[rel="canonical"]');
    if (dm) dm.content = desc;
    if (ogt) ogt.content = document.title;
    if (ogd) ogd.content = desc;
    if (can) can.href = "https://mid04.github.io/al-shorok/ar/";
  }
  function translate(root) {
    if (root.nodeType === Node.TEXT_NODE) {
      const key = root.nodeValue.trim();
      if (key && dict[key]) root.nodeValue = root.nodeValue.replace(key, dict[key]);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE && root !== document) return;
    if (root.matches && root.matches("script,style")) return;
    if (root.querySelectorAll) root.querySelectorAll("[aria-label],[alt],[title]").forEach(el =>
      ["aria-label","alt","title"].forEach(a => { const v=el.getAttribute(a); if (v && attrs[v]) el.setAttribute(a,attrs[v]); })
    );
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const n=walker.currentNode;
      if (n.parentElement.closest("script,style")) continue;
      const key=n.nodeValue.trim();
      if (key && dict[key]) n.nodeValue=n.nodeValue.replace(key,dict[key]);
    }
  }
  function setup() {
    if (!document.body) return;
    translate(document.body);
    const menu=document.getElementById("menu");
    if(menu&&!document.getElementById("lang-switch")){
      const li=document.createElement("li"),a=document.createElement("a");
      a.id="lang-switch";a.className="language-switch";a.href=isAr?"./":"ar/";
      a.textContent=isAr?"English":"العربية";a.lang=isAr?"en":"ar";a.hreflang=a.lang;
      li.appendChild(a);menu.appendChild(li);
    }
    const base="https://alshorouksupplies.com/";
    [["en",base],["ar",base+"ar/"],["x-default",base]].forEach(([l,u])=>{
      if(!document.querySelector('link[hreflang="'+l+'"]')){
        const e=document.createElement("link");e.rel="alternate";e.hreflang=l;e.href=u;document.head.appendChild(e);
      }
    });
    if(isAr){
      const address=document.getElementById("c-ad"),footer=document.getElementById("f-ad");
      if(address)address.textContent="21 شارع عماد الدين، وسط البلد، القاهرة، مصر";
      if(footer)footer.textContent="21 شارع عماد الدين، وسط البلد، القاهرة، مصر";
    }
    if(isAr){
      const cats=document.getElementById("cats");
      if(cats)cats.addEventListener("click",e=>{const card=e.target.closest("a.cat");if(!card)return;setTimeout(()=>{const field=document.getElementById("pr");if(field)field.value=dict[card.dataset.p]||card.dataset.p;},0);},true);
    }
    new MutationObserver(records=>records.forEach(r=>r.addedNodes.forEach(translate))).observe(document.body,{childList:true,subtree:true});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",setup,{once:true});else setup();
})();
