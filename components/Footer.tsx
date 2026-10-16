export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <p className="font-display font-bold text-white tracking-tight">AETHER</p>
        <div className="text-sm text-void-500 space-y-1">
          <p>© Aether. All Rights Reserved.</p>
          <p>
            Web Design and Development by{" "}
            <a href="https://upqode.com/" target="_blank" rel="noopener noreferrer" className="hover:text-void-300 transition-colors">
              UPQODE
            </a>.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-void-400">
          <a href="https://upqode.com/web-design/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Web Design</a>
          <a href="https://upqode.com/wordpress-development/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Development</a>
        </div>
      </div>
    </footer>
  );
}
