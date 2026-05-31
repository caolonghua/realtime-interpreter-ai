/* Realtime Interpreter AI — marketing site i18n + screenshot switcher */

const SUPPORTED = ["en", "zh-Hans", "zh-Hant", "ja", "ko", "fr", "de", "es"];

const copy = {
  en: {
    lang_label: "Language",
    nav_features: "Features",
    nav_privacy: "Privacy",
    nav_plans: "Access",
    nav_contact: "Contact",
    hero_eyebrow: "Available on the App Store",
    hero_title: "Live interpretation for the moments you cannot miss.",
    hero_subtitle:
      "Realtime Interpreter AI turns meetings, videos, online classes, and live events into translated captions and translated headphone audio.",
    hero_cta: "View on App Store",
    hero_secondary: "Explore features",
    intro: "Not an offline translator. A lightweight language layer for live participation.",
    features_eyebrow: "Live intelligence",
    features_title: "Follow the conversation as it happens.",
    features_body:
      "Choose a target language and start listening. The app detects the input language automatically, shows translated captions, and can speak the translation through your headphones.",
    f1_title: "Live translated captions",
    f1_body: "Built for meetings, lectures, online courses, livestreams, and videos.",
    f2_title: "Translated headphone audio",
    f2_body: "Hear the translation without interrupting the room.",
    f3_title: "History & Word export",
    f3_body: "Save source text and translations for review, copy, and export.",
    pip_eyebrow: "Picture in Picture",
    pip_title: "Captions that float above what you are watching.",
    pip_body:
      "Use PiP captions on iPhone and iPad while watching videos, online classes, or meetings without constant app switching.",
    history_eyebrow: "From live to archive",
    history_title: "A live session can become a useful record.",
    history_body:
      "History saves recognized source text and translated text. After a meeting, review key points, copy text, or export a Word document.",
    privacy_eyebrow: "Privacy by design",
    privacy_title: "Realtime processing should still feel controlled.",
    privacy_1: "The app asks for explicit AI data-processing consent before sending audio.",
    privacy_2: "No permanent service key is embedded in the app; developer service access uses short-lived credentials.",
    privacy_3: "History is user-managed and can be viewed, copied, exported, or deleted.",
    plans_eyebrow: "Flexible access",
    plans_title: "Try 1 minute free, or bring your own service credential.",
    plans_body: "Use App Credits for a quick start, or enter your own service credential. Purchase screens include privacy policy and terms links.",
    plans_cta: "Download on App Store",
    contact_eyebrow: "Support & Contact",
    contact_title: "We are here when you need us.",
    contact_body: "Questions about the app, your subscription, or privacy? Reach us directly. We typically respond within one business day.",
    footer_tagline: "Live translated subtitles and voice.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Use (EULA)",
    footer_support: "Support",
    footer_appstore: "App Store",
  },
  "zh-Hans": {
    lang_label: "语言",
    nav_features: "功能",
    nav_privacy: "隐私",
    nav_plans: "使用方式",
    nav_contact: "联系",
    hero_eyebrow: "已上架 App Store",
    hero_title: "实时翻译，让你不再错过对话发生的每一刻。",
    hero_subtitle: "Realtime Interpreter AI 将会议、视频、网课和国际活动中的实时人声转化为翻译字幕，并通过耳机播读译文。",
    hero_cta: "前往 App Store",
    hero_secondary: "了解功能",
    intro: "它不是离线翻译器，而是一个随身的跨语言参与层。",
    features_eyebrow: "实时智能",
    features_title: "让你在对话发生时就跟上。",
    features_body: "选择目标语言后开始收音。输入语言自动识别，译文以字幕形式实时出现；开启耳机播放后，翻译结果会同步朗读，减少盯屏负担。",
    f1_title: "实时翻译字幕",
    f1_body: "适合会议、讲座、网课、直播和视频跟听。",
    f2_title: "耳机播读译文",
    f2_body: "在不打断现场的情况下，把译文送到耳机里。",
    f3_title: "历史与 Word 导出",
    f3_body: "保存原文和译文，复盘时可查看、复制、导出。",
    pip_eyebrow: "画中画",
    pip_title: "字幕悬浮在你正在看的内容之上。",
    pip_body: "在 iPhone 和 iPad 上使用画中画字幕，观看视频、网课或会议时无需频繁切换窗口。",
    history_eyebrow: "从现场到存档",
    history_title: "一次同传，也可以成为一份可复盘的资料。",
    history_body: "历史记录保存识别原文和译文。会议结束后，你可以回看要点、复制文本，或导出 Word 文档进入自己的工作流。",
    privacy_eyebrow: "隐私优先",
    privacy_title: "实时处理，也要让用户有控制权。",
    privacy_1: "开始前显示 AI 数据处理同意提示，用户确认后才发送音频。",
    privacy_2: "App 不内置永久服务密钥，开发者服务使用短时授权凭证。",
    privacy_3: "历史记录由用户管理，可查看、复制、导出或删除。",
    plans_eyebrow: "灵活计划",
    plans_title: "免费试用 1 分钟，也可以自带服务凭证。",
    plans_body: "普通用户可以通过 App 内额度快速开始，技术用户也可以填写自己的服务凭证。订阅和额度入口内提供隐私政策与使用条款链接。",
    plans_cta: "前往 App Store 下载",
    contact_eyebrow: "支持与联系",
    contact_title: "需要时我们都在。",
    contact_body: "关于 App、订阅或隐私的问题，欢迎直接联系。通常我们会在一个工作日内回复。",
    footer_tagline: "实时翻译字幕与语音。",
    footer_privacy: "隐私政策",
    footer_terms: "使用条款 (EULA)",
    footer_support: "支持",
    footer_appstore: "App Store",
  },
  "zh-Hant": {
    lang_label: "語言",
    nav_features: "功能",
    nav_privacy: "隱私",
    nav_plans: "使用方式",
    nav_contact: "聯絡",
    hero_eyebrow: "已上架 App Store",
    hero_title: "即時翻譯，讓你不再錯過對話發生的每一刻。",
    hero_subtitle: "Realtime Interpreter AI 將會議、影片、線上課程和國際活動中的即時人聲轉化為翻譯字幕，並透過耳機播讀譯文。",
    hero_cta: "前往 App Store",
    hero_secondary: "了解功能",
    intro: "它不是離線翻譯器，而是一個隨身的跨語言參與層。",
    features_eyebrow: "即時智能",
    features_title: "讓你在對話發生時就跟上。",
    features_body: "選擇目標語言後開始收音。輸入語言自動辨識，譯文以字幕形式即時出現；開啟耳機播放後，翻譯結果會同步朗讀，減少盯螢幕負擔。",
    f1_title: "即時翻譯字幕",
    f1_body: "適合會議、講座、線上課程、直播和影片跟聽。",
    f2_title: "耳機播讀譯文",
    f2_body: "在不打斷現場的情況下，把譯文送到耳機裡。",
    f3_title: "歷史與 Word 匯出",
    f3_body: "保存原文和譯文，回顧時可查看、複製、匯出。",
    pip_eyebrow: "子母畫面",
    pip_title: "字幕懸浮在你正在看的內容之上。",
    pip_body: "在 iPhone 和 iPad 上使用子母畫面字幕，觀看影片、線上課程或會議時無需頻繁切換視窗。",
    history_eyebrow: "從現場到存檔",
    history_title: "一次同傳，也可以成為一份可回顧的資料。",
    history_body: "歷史記錄保存辨識原文和譯文。會議結束後，你可以回看要點、複製文字，或匯出 Word 文件進入自己的工作流。",
    privacy_eyebrow: "隱私優先",
    privacy_title: "即時處理，也要讓使用者有控制權。",
    privacy_1: "開始前顯示 AI 資料處理同意提示，使用者確認後才發送音訊。",
    privacy_2: "App 不內建永久服務密鑰，開發者服務使用短期授權憑證。",
    privacy_3: "歷史記錄由使用者管理，可查看、複製、匯出或刪除。",
    plans_eyebrow: "靈活方案",
    plans_title: "免費試用 1 分鐘，也可以自帶服務憑證。",
    plans_body: "一般使用者可以透過 App 內額度快速開始，技術使用者也可以填寫自己的服務憑證。訂閱與額度入口內提供隱私政策與使用條款連結。",
    plans_cta: "前往 App Store 下載",
    contact_eyebrow: "支援與聯絡",
    contact_title: "需要時我們都在。",
    contact_body: "關於 App、訂閱或隱私的問題，歡迎直接聯絡。通常我們會在一個工作日內回覆。",
    footer_tagline: "即時翻譯字幕與語音。",
    footer_privacy: "隱私權政策",
    footer_terms: "使用條款 (EULA)",
    footer_support: "支援",
    footer_appstore: "App Store",
  },
  ja: {
    lang_label: "言語",
    nav_features: "機能",
    nav_privacy: "プライバシー",
    nav_plans: "プラン",
    nav_contact: "お問い合わせ",
    hero_eyebrow: "App Store で配信中",
    hero_title: "会話の瞬間に追いつくリアルタイム通訳。",
    hero_subtitle: "Realtime Interpreter AI は会議、動画、オンライン授業、国際イベントの音声をリアルタイムで字幕に変換し、イヤホンで翻訳音声を流します。",
    hero_cta: "App Store で表示",
    hero_secondary: "機能を見る",
    intro: "オフライン翻訳ではなく、軽量でリアルタイムな言語参加レイヤー。",
    features_eyebrow: "リアルタイム",
    features_title: "会話の瞬間に追いつく。",
    features_body: "対象言語を選んで開始するだけ。話者の言語を自動認識し、翻訳字幕を即座に表示。イヤホン再生を有効にすれば翻訳音声も同時に届きます。",
    f1_title: "リアルタイム翻訳字幕",
    f1_body: "会議・講演・オンライン授業・配信・動画視聴に最適。",
    f2_title: "イヤホンで翻訳音声",
    f2_body: "場を遮らずに翻訳をイヤホンで聞けます。",
    f3_title: "履歴と Word 書き出し",
    f3_body: "原文と訳文を保存。あとから確認、コピー、書き出しが可能。",
    pip_eyebrow: "ピクチャ・イン・ピクチャ",
    pip_title: "見ているコンテンツの上に字幕を表示。",
    pip_body: "iPhone と iPad でピクチャ・イン・ピクチャ字幕を使えば、動画やオンライン授業、会議の最中に切り替え操作は不要。",
    history_eyebrow: "ライブから記録へ",
    history_title: "ライブセッションを記録に。",
    history_body: "履歴には認識した原文と訳文が保存されます。会議後に要点を見直したり、テキストをコピーしたり、Word に書き出して活用できます。",
    privacy_eyebrow: "プライバシー第一",
    privacy_title: "リアルタイム処理でも、制御は手元に。",
    privacy_1: "開始前に AI データ処理への同意を確認し、了承後にのみ音声を送信します。",
    privacy_2: "アプリに恒久的なサービスキーは埋め込みません。開発者サービスは短期の認証情報を使用。",
    privacy_3: "履歴はユーザー管理。閲覧・コピー・書き出し・削除が可能。",
    plans_eyebrow: "柔軟な利用",
    plans_title: "1分間無料、または独自の認証情報を利用。",
    plans_body: "アプリ内クレジットで素早く開始するか、ご自身のサービス認証情報を入力。購入画面にプライバシーポリシーと利用規約のリンクがあります。",
    plans_cta: "App Store でダウンロード",
    contact_eyebrow: "サポート・お問い合わせ",
    contact_title: "必要な時はいつでも。",
    contact_body: "アプリ、サブスクリプション、プライバシーに関するご質問はお気軽に。通常1営業日以内に返信します。",
    footer_tagline: "リアルタイム翻訳字幕と音声。",
    footer_privacy: "プライバシーポリシー",
    footer_terms: "利用規約 (EULA)",
    footer_support: "サポート",
    footer_appstore: "App Store",
  },
  ko: {
    lang_label: "언어",
    nav_features: "기능",
    nav_privacy: "개인정보",
    nav_plans: "이용 방식",
    nav_contact: "연락처",
    hero_eyebrow: "App Store 출시",
    hero_title: "놓치고 싶지 않은 대화의 순간을 위한 실시간 통역.",
    hero_subtitle: "Realtime Interpreter AI 는 회의·영상·온라인 강의·국제 행사에서 실시간 음성을 번역 자막과 헤드폰 음성으로 전환합니다.",
    hero_cta: "App Store 에서 보기",
    hero_secondary: "기능 살펴보기",
    intro: "오프라인 번역기가 아닌, 가벼운 실시간 참여 레이어.",
    features_eyebrow: "실시간 지능",
    features_title: "대화가 일어나는 순간을 따라가세요.",
    features_body: "대상 언어를 선택하고 시작하세요. 화자의 언어를 자동 인식하고 번역 자막을 즉시 표시. 헤드폰 재생을 켜면 번역 음성을 함께 들을 수 있습니다.",
    f1_title: "실시간 번역 자막",
    f1_body: "회의, 강연, 온라인 강의, 라이브, 영상 시청에 적합.",
    f2_title: "헤드폰 번역 음성",
    f2_body: "현장을 방해하지 않고 번역을 헤드폰으로 듣습니다.",
    f3_title: "기록과 Word 내보내기",
    f3_body: "원문과 번역을 저장. 나중에 확인·복사·내보내기 가능.",
    pip_eyebrow: "화면 속 화면",
    pip_title: "보고 있는 화면 위에 자막이 떠 있도록.",
    pip_body: "iPhone 과 iPad 에서 PiP 자막을 사용하면 영상·강의·회의 중에 앱을 자주 전환할 필요가 없습니다.",
    history_eyebrow: "실시간에서 기록으로",
    history_title: "실시간 세션을 기록으로 남기세요.",
    history_body: "기록에는 인식된 원문과 번역문이 저장됩니다. 회의가 끝난 뒤 요점을 다시 보거나 텍스트를 복사하거나 Word 로 내보낼 수 있습니다.",
    privacy_eyebrow: "프라이버시 우선",
    privacy_title: "실시간 처리라도 통제권은 사용자에게.",
    privacy_1: "시작 전에 AI 데이터 처리 동의를 확인하고, 동의 후에만 음성을 전송합니다.",
    privacy_2: "앱에는 영구 서비스 키가 내장되지 않습니다. 개발자 서비스는 단기 자격 증명을 사용.",
    privacy_3: "기록은 사용자가 관리합니다. 보기·복사·내보내기·삭제 가능.",
    plans_eyebrow: "유연한 이용",
    plans_title: "1분 무료 체험, 자체 자격 증명도 사용 가능.",
    plans_body: "앱 크레딧으로 빠르게 시작하거나, 자체 서비스 자격 증명을 입력하세요. 구매 화면에 개인정보 처리방침과 이용 약관 링크가 있습니다.",
    plans_cta: "App Store 에서 다운로드",
    contact_eyebrow: "지원 및 연락처",
    contact_title: "필요할 때 언제든.",
    contact_body: "앱, 구독, 개인정보에 관한 질문은 언제든 연락주세요. 보통 영업일 기준 하루 내 답변드립니다.",
    footer_tagline: "실시간 번역 자막과 음성.",
    footer_privacy: "개인정보 처리방침",
    footer_terms: "이용 약관 (EULA)",
    footer_support: "지원",
    footer_appstore: "App Store",
  },
  fr: {
    lang_label: "Langue",
    nav_features: "Fonctionnalités",
    nav_privacy: "Confidentialité",
    nav_plans: "Accès",
    nav_contact: "Contact",
    hero_eyebrow: "Disponible sur l'App Store",
    hero_title: "L'interprétation en direct pour les moments à ne pas manquer.",
    hero_subtitle: "Realtime Interpreter AI transforme les réunions, vidéos, cours en ligne et événements en direct en sous-titres traduits et audio traduit dans vos écouteurs.",
    hero_cta: "Voir sur l'App Store",
    hero_secondary: "Découvrir",
    intro: "Pas un traducteur hors ligne, mais une fine couche linguistique pour la participation en direct.",
    features_eyebrow: "Intelligence en direct",
    features_title: "Suivez la conversation au moment où elle se passe.",
    features_body: "Choisissez une langue cible et démarrez l'écoute. L'app détecte automatiquement la langue d'entrée, affiche des sous-titres traduits et peut parler la traduction dans vos écouteurs.",
    f1_title: "Sous-titres traduits en direct",
    f1_body: "Conçu pour les réunions, conférences, cours en ligne, livestreams et vidéos.",
    f2_title: "Audio traduit dans les écouteurs",
    f2_body: "Entendre la traduction sans interrompre la pièce.",
    f3_title: "Historique et export Word",
    f3_body: "Sauvegardez le texte source et les traductions pour les revoir, copier et exporter.",
    pip_eyebrow: "Image dans l'image",
    pip_title: "Des sous-titres qui flottent sur ce que vous regardez.",
    pip_body: "Utilisez les sous-titres PiP sur iPhone et iPad pendant les vidéos, cours ou réunions, sans changer constamment d'app.",
    history_eyebrow: "Du direct à l'archive",
    history_title: "Une session live peut devenir une ressource utile.",
    history_body: "L'historique enregistre le texte source reconnu et le texte traduit. Après une réunion, revoyez les points clés, copiez le texte ou exportez un document Word.",
    privacy_eyebrow: "Confidentialité par conception",
    privacy_title: "Le traitement en temps réel doit rester sous contrôle.",
    privacy_1: "L'app demande un consentement explicite au traitement IA avant d'envoyer l'audio.",
    privacy_2: "Aucune clé de service permanente n'est intégrée dans l'app ; l'accès au service développeur utilise des identifiants à courte durée de vie.",
    privacy_3: "L'historique est géré par l'utilisateur et peut être consulté, copié, exporté ou supprimé.",
    plans_eyebrow: "Accès flexible",
    plans_title: "Essayez 1 minute gratuite, ou apportez vos propres identifiants.",
    plans_body: "Utilisez les crédits de l'app pour démarrer rapidement, ou saisissez vos propres identifiants de service. Les écrans d'achat incluent les liens vers la politique de confidentialité et les conditions.",
    plans_cta: "Télécharger sur l'App Store",
    contact_eyebrow: "Support et contact",
    contact_title: "Nous sommes là quand vous en avez besoin.",
    contact_body: "Questions sur l'app, votre abonnement ou la confidentialité ? Contactez-nous directement. Nous répondons généralement sous un jour ouvré.",
    footer_tagline: "Sous-titres et voix traduits en direct.",
    footer_privacy: "Politique de confidentialité",
    footer_terms: "Conditions d'utilisation (EULA)",
    footer_support: "Support",
    footer_appstore: "App Store",
  },
  de: {
    lang_label: "Sprache",
    nav_features: "Funktionen",
    nav_privacy: "Datenschutz",
    nav_plans: "Zugang",
    nav_contact: "Kontakt",
    hero_eyebrow: "Verfügbar im App Store",
    hero_title: "Live-Dolmetschen für die Momente, die zählen.",
    hero_subtitle: "Realtime Interpreter AI verwandelt Meetings, Videos, Online-Kurse und Live-Events in übersetzte Untertitel und übersetzten Kopfhörerton.",
    hero_cta: "Im App Store ansehen",
    hero_secondary: "Funktionen entdecken",
    intro: "Kein Offline-Übersetzer, sondern eine leichte Sprachschicht für Live-Teilnahme.",
    features_eyebrow: "Live-Intelligenz",
    features_title: "Folgen Sie dem Gespräch im Moment.",
    features_body: "Wählen Sie eine Zielsprache und beginnen Sie zuzuhören. Die App erkennt die Eingangssprache automatisch, zeigt übersetzte Untertitel und kann die Übersetzung über Ihre Kopfhörer sprechen.",
    f1_title: "Live übersetzte Untertitel",
    f1_body: "Für Meetings, Vorträge, Online-Kurse, Livestreams und Videos.",
    f2_title: "Übersetzter Kopfhörerton",
    f2_body: "Übersetzung hören, ohne den Raum zu stören.",
    f3_title: "Verlauf und Word-Export",
    f3_body: "Quelltext und Übersetzungen speichern, einsehen, kopieren und exportieren.",
    pip_eyebrow: "Bild-in-Bild",
    pip_title: "Untertitel, die über dem schweben, was Sie sehen.",
    pip_body: "PiP-Untertitel auf iPhone und iPad verwenden, während Sie Videos, Online-Kurse oder Meetings ohne ständiges Wechseln betrachten.",
    history_eyebrow: "Vom Live zum Archiv",
    history_title: "Eine Live-Sitzung kann zur nützlichen Quelle werden.",
    history_body: "Der Verlauf speichert erkannten Quelltext und Übersetzungen. Nach einem Meeting können Sie Schlüsselpunkte nachsehen, Texte kopieren oder ein Word-Dokument exportieren.",
    privacy_eyebrow: "Datenschutz im Design",
    privacy_title: "Echtzeit-Verarbeitung soll kontrolliert bleiben.",
    privacy_1: "Die App fragt vor dem Senden von Audio explizit nach der Zustimmung zur KI-Datenverarbeitung.",
    privacy_2: "In der App ist kein permanenter Service-Schlüssel eingebettet; Entwicklerdienste nutzen kurzlebige Anmeldedaten.",
    privacy_3: "Der Verlauf wird vom Benutzer verwaltet — anzeigen, kopieren, exportieren oder löschen.",
    plans_eyebrow: "Flexibler Zugang",
    plans_title: "1 Minute kostenlos testen oder eigene Anmeldedaten nutzen.",
    plans_body: "App-Guthaben für einen schnellen Start nutzen oder eigene Service-Anmeldedaten eingeben. Kaufbildschirme enthalten Links zur Datenschutzrichtlinie und zu den Nutzungsbedingungen.",
    plans_cta: "Im App Store laden",
    contact_eyebrow: "Support & Kontakt",
    contact_title: "Wir sind da, wenn Sie uns brauchen.",
    contact_body: "Fragen zur App, zum Abo oder zum Datenschutz? Kontaktieren Sie uns direkt. Wir antworten in der Regel innerhalb eines Werktages.",
    footer_tagline: "Live übersetzte Untertitel und Sprache.",
    footer_privacy: "Datenschutzrichtlinie",
    footer_terms: "Nutzungsbedingungen (EULA)",
    footer_support: "Support",
    footer_appstore: "App Store",
  },
  es: {
    lang_label: "Idioma",
    nav_features: "Funciones",
    nav_privacy: "Privacidad",
    nav_plans: "Acceso",
    nav_contact: "Contacto",
    hero_eyebrow: "Disponible en la App Store",
    hero_title: "Interpretación en vivo para los momentos que no puedes perderte.",
    hero_subtitle: "Realtime Interpreter AI convierte reuniones, vídeos, clases online y eventos en directo en subtítulos traducidos y audio traducido en tus auriculares.",
    hero_cta: "Ver en la App Store",
    hero_secondary: "Explorar funciones",
    intro: "No es un traductor sin conexión, sino una capa ligera de idioma para la participación en vivo.",
    features_eyebrow: "Inteligencia en vivo",
    features_title: "Sigue la conversación mientras sucede.",
    features_body: "Elige un idioma de destino y empieza a escuchar. La app detecta automáticamente el idioma de entrada, muestra subtítulos traducidos y puede hablar la traducción a través de tus auriculares.",
    f1_title: "Subtítulos traducidos en vivo",
    f1_body: "Diseñado para reuniones, conferencias, cursos online, livestreams y vídeos.",
    f2_title: "Audio traducido en auriculares",
    f2_body: "Escucha la traducción sin interrumpir la sala.",
    f3_title: "Historial y exportación a Word",
    f3_body: "Guarda texto original y traducciones para revisar, copiar y exportar.",
    pip_eyebrow: "Imagen en imagen",
    pip_title: "Subtítulos que flotan sobre lo que estás viendo.",
    pip_body: "Usa subtítulos PiP en iPhone y iPad mientras ves vídeos, clases online o reuniones sin cambiar de app constantemente.",
    history_eyebrow: "Del directo al archivo",
    history_title: "Una sesión en vivo puede convertirse en un registro útil.",
    history_body: "El historial guarda el texto original reconocido y el texto traducido. Después de una reunión, revisa los puntos clave, copia el texto o exporta un documento Word.",
    privacy_eyebrow: "Privacidad por diseño",
    privacy_title: "El procesamiento en tiempo real también debe sentirse bajo control.",
    privacy_1: "La app pide consentimiento explícito para el procesamiento de datos por IA antes de enviar audio.",
    privacy_2: "No hay clave de servicio permanente integrada en la app; el acceso al servicio del desarrollador usa credenciales de corta duración.",
    privacy_3: "El historial lo gestiona el usuario: ver, copiar, exportar o eliminar.",
    plans_eyebrow: "Acceso flexible",
    plans_title: "Prueba 1 minuto gratis, o usa tu propia credencial de servicio.",
    plans_body: "Usa los créditos de la app para empezar rápido, o introduce tu propia credencial de servicio. Las pantallas de compra incluyen enlaces a la política de privacidad y a los términos.",
    plans_cta: "Descargar en la App Store",
    contact_eyebrow: "Soporte y contacto",
    contact_title: "Aquí estamos cuando nos necesites.",
    contact_body: "¿Preguntas sobre la app, tu suscripción o privacidad? Contáctanos directamente. Solemos responder en un día laborable.",
    footer_tagline: "Subtítulos y voz traducidos en vivo.",
    footer_privacy: "Política de privacidad",
    footer_terms: "Términos de uso (EULA)",
    footer_support: "Soporte",
    footer_appstore: "App Store",
  },
};

// Map UI language to screenshot folder.
const SHOT_LANG = (lang) => (SUPPORTED.includes(lang) ? lang : "en");

const SHOT_PATH = (lang, kind) => `./assets/screenshots/${kind.startsWith("ipad") ? "ipad" : "iphone"}/${SHOT_LANG(lang)}/01-main.png`;

function detectInitialLang() {
  const saved = localStorage.getItem("ri-marketing-lang");
  if (saved && copy[saved]) return saved;
  const nav = navigator.languages || [navigator.language || "en"];
  for (const raw of nav) {
    const lower = raw.toLowerCase();
    if (lower.startsWith("zh")) {
      // Heuristic: Hant / TW / HK → traditional, else simplified
      if (/hant|tw|hk|mo/.test(lower)) return "zh-Hant";
      return "zh-Hans";
    }
    const primary = lower.split("-")[0];
    if (copy[primary]) return primary;
  }
  return "en";
}

function setLanguage(lang) {
  if (!copy[lang]) lang = "en";
  const dict = copy[lang];
  document.documentElement.lang = lang === "zh-Hans" ? "zh-CN" : (lang === "zh-Hant" ? "zh-TW" : lang);
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dict[key]) node.textContent = dict[key];
  });
  // Switch device screenshots
  document.querySelectorAll("img[data-shot]").forEach((img) => {
    const kind = img.getAttribute("data-shot");
    const next = SHOT_PATH(lang, kind);
    // Probe with a temp image to fall back gracefully
    const probe = new Image();
    probe.onload = () => { img.src = next; };
    probe.onerror = () => { /* keep current fallback */ };
    probe.src = next;
  });
  // Update select value
  const select = document.getElementById("lang-select");
  if (select) select.value = lang;
  localStorage.setItem("ri-marketing-lang", lang);
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("lang-select");
  if (select) {
    select.addEventListener("change", (e) => setLanguage(e.target.value));
  }
  // Reveal-on-scroll micro-animation (preserves original feel)
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 }
  );
  document
    .querySelectorAll("section, .feature-item, .privacy-points p")
    .forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });

  setLanguage(detectInitialLang());
});
