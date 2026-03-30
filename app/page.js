'use client';

import { useState, useEffect } from 'react';

/* Minimal inline SVG icons — clean, professional */
const Icons = {
  eye: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  mic: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
  cloud: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
  news: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><line x1="10" y1="6" x2="18" y2="6"/><line x1="10" y1="10" x2="18" y2="10"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
  video: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>,
  search: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  book: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  mail: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  map: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  cpu: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>,
  camera: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
  zap: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  download: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
  arrowRight: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  settings: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  monitor: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  file: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  check: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  terminal: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>,
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Icons.eye,
      title: 'Yüz Tanıma',
      desc: 'Optik yüz tanıma ile güvenli kimlik doğrulama. LBPH algoritması ile gerçek zamanlı yüz tespiti.',
    },
    {
      icon: Icons.mic,
      title: 'Sesli Komut',
      desc: 'Doğal dil işleme ile sesli komutlarınızı anlayan ve yanıt veren akıllı ses asistanı.',
    },
    {
      icon: Icons.cloud,
      title: 'Hava Durumu',
      desc: 'Konum tabanlı anlık hava durumu raporu — sıcaklık, nem, rüzgâr hızı ve genel hava durumu.',
    },
    {
      icon: Icons.news,
      title: 'Haber Bülteni',
      desc: 'API entegrasyonu ile güncel haberleri sesli olarak okur ve istediğinizde kaynaklara yönlendirir.',
    },
    {
      icon: Icons.video,
      title: 'YouTube İndirici',
      desc: 'YouTube video URL\'si girerek videoları istediğiniz klasöre kolayca indirin.',
    },
    {
      icon: Icons.search,
      title: 'Google & YouTube Arama',
      desc: 'Sesli komutla Google\'da arama yapın veya YouTube\'da video arayın, sonuçlar anında açılır.',
    },
    {
      icon: Icons.book,
      title: 'Akıllı Sözlük',
      desc: 'Kelime anlamlarını sorgulayın, yazım hataları otomatik algılansın ve düzeltme önerileri alın.',
    },
    {
      icon: Icons.mail,
      title: 'E-posta Gönderimi',
      desc: 'Sesli komut ile doğrudan e-posta gönderin — SMTP entegrasyonu ile hızlı iletişim.',
    },
    {
      icon: Icons.map,
      title: 'Harita & Konum',
      desc: 'Sesli komutla Google Haritalar üzerinde konum arayın, harita anında tarayıcınızda açılır.',
    },
    {
      icon: Icons.cpu,
      title: 'Sistem Bilgisi',
      desc: 'CPU kullanımı, pil yüzdesi ve sistem durumu hakkında anlık bilgi alın.',
    },
    {
      icon: Icons.camera,
      title: 'Ekran Görüntüsü',
      desc: 'Sesli komutla anında ekran görüntüsü alın, otomatik olarak belirtilen konuma kaydedin.',
    },
    {
      icon: Icons.zap,
      title: 'Eğlence Modu',
      desc: 'Şaka ve fıkralarla gününüzü güzelleştirin — JARVIS sizi eğlendirmeye her zaman hazır.',
    },
  ];

  const techStack = [
    'Python 3.8+', 'OpenCV', 'SpeechRecognition', 'pyttsx3',
    'Requests', 'psutil', 'Wikipedia API', 'pytube',
    'Pillow', 'PyAutoGUI', 'BeautifulSoup', 'Geocoder',
  ];

  const handleDownload = () => {
    window.open('https://github.com/DevKursat/J.A.R.V.I.S/archive/refs/heads/main.zip', '_blank');
  };

  return (
    <>
      {/* HEADER */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#" className="header-logo">
            <div className="logo-icon">J</div>
            <div className="logo-text">
              J.A.R.V.I.S <span>•</span> Erum Tech Core
            </div>
          </a>

          <nav className={`header-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#ozellikler" onClick={() => setMobileMenuOpen(false)}>Özellikler</a>
            <a href="#nasil-calisir" onClick={() => setMobileMenuOpen(false)}>Nasıl Çalışır</a>
            <a href="#teknoloji" onClick={() => setMobileMenuOpen(false)}>Teknoloji</a>
            <a href="#indir" className="header-cta" onClick={() => setMobileMenuOpen(false)}>İndir</a>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü aç/kapat"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient-1" />
          <div className="hero-gradient-2" />
          <div className="hero-grid" />
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Erum Tech Core tarafından geliştirildi
          </div>

          <h1 className="hero-title">
            <span className="hero-title-gradient">J.A.R.V.I.S</span>
          </h1>
          <p className="hero-acronym">
            Just A Rather Very Intelligent System
          </p>
          <p className="hero-desc">
            Yüz tanıma, sesli komut, hava durumu, haber, YouTube indirme ve çok daha fazlasını sunan
            yapay zekâ destekli <strong>kişisel masaüstü asistanınız</strong>.
          </p>

          <div className="hero-actions">
            <a href="#indir" className="btn-primary">
              {Icons.download} Hemen İndir
            </a>
            <a href="#ozellikler" className="btn-secondary">
              Özellikleri Keşfet {Icons.arrowRight}
            </a>
          </div>

          {/* Orbiting Ring Visual */}
          <div className="hero-visual">
            <div className="hero-ring" />
            <div className="hero-ring hero-ring-2" />
            <div className="hero-ring hero-ring-3" />
            <div className="hero-ring-center">
              <span>AI</span>
            </div>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">12+</div>
              <div className="hero-stat-label">Özellik</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">Python</div>
              <div className="hero-stat-label">Tabanlı</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">AI</div>
              <div className="hero-stat-label">Destekli</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">Açık</div>
              <div className="hero-stat-label">Kaynak</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="ozellikler">
        <div className="container">
          <div className="features-header">
            <div className="section-badge">Özellikler</div>
            <h2 className="section-title">Güçlü Yapay Zekâ Yetenekleri</h2>
            <p className="section-subtitle">
              JARVIS, masaüstünüzde çalışan kapsamlı bir yapay zekâ asistanıdır. 
              İşte size sunduğu tüm özellikler.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
                <span className="feature-tag tag-desktop">Masaüstü</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works" id="nasil-calisir">
        <div className="container">
          <div className="how-header">
            <div className="section-badge">Kurulum</div>
            <h2 className="section-title">3 Adımda Başlayın</h2>
            <p className="section-subtitle">
              JARVIS'i kurmak son derece kolay. İndirin, çıkartın ve çift tıklayın — 
              gerisini otomatik kurulum halledecek.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">ZIP'i İndirin</h3>
              <p className="step-desc">
                Aşağıdaki indirme butonuna tıklayın. 
                Proje dosyaları otomatik olarak ZIP formatında indirilecektir.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Çıkartın</h3>
              <p className="step-desc">
                İndirilen ZIP dosyasını istediğiniz bir klasöre çıkartın. 
                İçinde <code>desktop-app</code> klasörünü bulacaksınız.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Çift Tıklayın</h3>
              <p className="step-desc">
                <code>desktop-app</code> klasöründeki <strong>JARVIS-Kur.bat</strong> dosyasına 
                çift tıklayın. Kurulum ve çalıştırma otomatik yapılır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="tech-stack" id="teknoloji">
        <div className="container">
          <div className="tech-header">
            <div className="section-badge">Teknoloji</div>
            <h2 className="section-title">Kullanılan Teknolojiler</h2>
            <p className="section-subtitle">
              JARVIS, Python ekosisteminin en güçlü kütüphaneleri ile inşa edilmiştir.
            </p>
          </div>

          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div className="tech-item" key={index}>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section className="download" id="indir">
        <div className="container">
          <div className="download-card">
            <div className="download-icon">{Icons.download}</div>
            <h2>JARVIS'i İndir ve Çalıştır</h2>
            <p className="download-desc">
              Tek tıkla indirin. <strong>JARVIS-Kur.bat</strong> dosyasına çift tıkladığınızda 
              tüm bağımlılıklar otomatik kurulur ve JARVIS başlatılır.
            </p>

            <button className="download-btn" onClick={handleDownload} id="download-button">
              {Icons.download} Hemen İndir (.zip)
            </button>

            <div className="download-info">
              <div className="download-info-item">
                {Icons.settings} Otomatik Kurulum
              </div>
              <div className="download-info-item">
                {Icons.zap} Tek Tıkla Çalıştır
              </div>
              <div className="download-info-item">
                {Icons.monitor} Windows Uyumlu
              </div>
              <div className="download-info-item">
                {Icons.file} MIT Lisans
              </div>
            </div>
          </div>

          <div className="requirements">
            <h3>İndirdikten Sonra Ne Yapmalıyım?</h3>
            <ul className="requirements-list">
              <li>ZIP dosyasını bir klasöre çıkartın</li>
              <li>desktop-app klasörünü açın</li>
              <li>JARVIS-Kur.bat'a çift tıklayın (ilk kurulum)</li>
              <li>Sonraki kullanımlarda JARVIS-Baslat.bat'a tıklayın</li>
              <li>Python 3.8+ sisteminizde yüklü olmalıdır</li>
              <li>Mikrofon ve kamera gereklidir</li>
            </ul>

            <div className="setup-code">
              <span># Veya terminalden manuel kurulum:</span><br />
              git clone https://github.com/DevKursat/J.A.R.V.I.S.git<br /><br />
              <span># Masaüstü uygulama klasörüne gidin</span><br />
              cd J.A.R.V.I.S/desktop-app<br /><br />
              <span># Otomatik kurulumu başlatın</span><br />
              JARVIS-Kur.bat
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-brand-name">
                J.A.R.V.I.S <span>•</span> Erum Tech Core
              </div>
              <div className="footer-brand-sub">
                Yapay Zekâ Destekli Kişisel Masaüstü Asistan
              </div>
            </div>

            <div className="footer-links">
              <a href="https://github.com/DevKursat/J.A.R.V.I.S" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="#ozellikler">Özellikler</a>
              <a href="#indir">İndir</a>
            </div>
          </div>

          <div className="footer-copyright">
            © {new Date().getFullYear()} Erum Tech Core. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>
    </>
  );
}
