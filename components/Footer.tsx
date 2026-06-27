import GitHubIcon from "@/components/GitHubIcon";

export default function Footer() {
  return (
    <footer>
      <ul className="footer-links">
        <li>
          <a href="https://github.com/shiphrahx" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon size={20} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/cassiaalmeida/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://medium.com/@shiphrah_" target="_blank" rel="noopener noreferrer" aria-label="Medium">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.notion.com/@shiphrah" target="_blank" rel="noopener noreferrer" aria-label="Notion">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M4.46 3.3 14.7 2.55c1.26-.11 1.58-.03 2.37.55l3.27 2.3c.54.4.72.5.72.93v15.27c0 .8-.29 1.27-1.3 1.34l-11.9.72c-.76.04-1.12-.07-1.52-.58L3.06 19.9c-.43-.58-.61-1.01-.61-1.52V4.6c0-.65.29-1.19 1-1.3zm.83 1.49c-.39.03-.48.21-.33.5l1.84 2.39c.18.25.36.29.79.27l9.83-.59c.22-.03.36-.16.27-.39l-.61-1.66c-.13-.34-.4-.5-.85-.47l-10.74.45zm9.27 13.07V8.71c0-.43-.13-.62-.51-.59l-1.16.07c-.34.04-.4.21-.4.55v9.06l-1.45-2.27-2.7-4.24c-.16-.27-.34-.36-.69-.34l-1.09.07c-.31.02-.4.2-.4.5v9.06c0 .31.13.52.43.5l1.04-.06c.34-.04.4-.23.4-.55v-5.97l1.48 2.42 2.8 4.34c.16.25.31.32.61.3l1.34-.08c.31-.02.4-.2.4-.5z"/>
            </svg>
          </a>
        </li>
      </ul>
      <span className="footer-copy">© 2026</span>
    </footer>
  );
}
