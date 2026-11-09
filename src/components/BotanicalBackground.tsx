export function BotanicalBackground() {
  return (
    <div className="botanical-background" aria-hidden="true">
      {['top', 'middle', 'bottom'].map(position => (
        <svg key={position} className={'botanical-branch botanical-' + position} viewBox="0 0 240 400" fill="none" focusable="false">
          <path d="M108 390C94 298 150 203 120 24" stroke="currentColor" strokeWidth="1.5" />
          <g fill="currentColor">
            <path d="M122 90C74 88 49 54 50 14c44 7 72 31 72 76Z" />
            <path d="M127 147C166 142 198 103 193 61c-44 15-66 44-66 86Z" />
            <path d="M127 210C81 200 49 166 54 123c45 12 73 44 73 87Z" />
            <path d="M119 272C161 260 195 229 193 184c-48 13-73 46-74 88Z" />
            <path d="M106 334C65 317 37 286 42 246c44 16 65 47 64 88Z" />
          </g>
        </svg>
      ))}
    </div>
  )
}
