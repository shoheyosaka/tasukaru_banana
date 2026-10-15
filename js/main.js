// たすかるバナナ サンプルサイト用スクリプト
document.addEventListener("DOMContentLoaded", () => {
  // モバイルメニュー
  document.querySelectorAll("[data-menu-root]").forEach((root) => {
    const toggle = root.querySelector("[data-menu-toggle]")
    const menu = root.querySelector("[data-menu]")
    if (!toggle || !menu) return

    const setOpen = (open) => {
      menu.classList.toggle("hidden", !open)
      toggle.setAttribute("aria-expanded", String(open))
      toggle.querySelector('[data-menu-icon="open"]')?.classList.toggle("hidden", open)
      toggle.querySelector('[data-menu-icon="close"]')?.classList.toggle("hidden", !open)
    }

    toggle.addEventListener("click", () => setOpen(menu.classList.contains("hidden")))
    menu.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => setOpen(false)),
    )
  })

  // よくある質問（同時に開くのは1つだけ）
  document.querySelectorAll("[data-faq-group]").forEach((group) => {
    const items = [...group.querySelectorAll("[data-faq-item]")]

    const setOpen = (item, open) => {
      item.querySelector("[data-faq-answer]").classList.toggle("hidden", !open)
      item.querySelector("[data-faq-button]").setAttribute("aria-expanded", String(open))
      const indicator = item.querySelector("[data-faq-indicator]")
      if (indicator.hasAttribute("data-rotate")) {
        indicator.classList.toggle("rotate-45", open)
      } else {
        indicator.textContent = open ? "−" : "＋"
      }
    }

    items.forEach((item) => {
      item.querySelector("[data-faq-button]").addEventListener("click", () => {
        const wasOpen = !item.querySelector("[data-faq-answer]").classList.contains("hidden")
        items.forEach((other) => setOpen(other, false))
        if (!wasOpen) setOpen(item, true)
      })
    })
  })

  // サービスのカルーセル（案A）
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector("[data-carousel-track]")
    carousel.querySelectorAll("[data-carousel-move]").forEach((button) => {
      button.addEventListener("click", () => {
        const direction = Number(button.dataset.carouselMove)
        track.scrollBy({ left: direction * 292, behavior: "smooth" })
      })
    })
  })
})
