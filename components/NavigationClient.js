'use client';
import { useEffect } from 'react';

export default function NavigationClient() {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.$) return;
    const $ = window.$;

    const initMobileMenu = () => {
      // Cleanup previous bindings
      $(".mobile_btn").off(".mobile");
      $(".main_menu a").off(".mobile");
      $(window).off(".mobile");

      // Toggle main menu
      $(".mobile_btn").on("click.mobile", function () {
        $(".main_menu").stop(true, true).slideToggle(300);
        $(this).find("span").toggleClass("fa-rotate-45");
      });

      // Close menu when a link is clicked (on mobile)
      $(".main_menu a").on("click.mobile", function () {
        if ($(window).width() < 991) {
          $(".main_menu").slideUp(300);
          $(".mobile_btn span").removeClass("fa-rotate-45");
        }
      });

      // Reset on desktop
      const handleResize = () => {
        if ($(window).width() > 991) {
          $(".main_menu").removeAttr("style");
        }
      };

      handleResize();
      $(window).on("resize.mobile", handleResize);
    };

    $(document).ready(initMobileMenu);

    // Cleanup on unmount
    return () => {
      $(".mobile_btn").off(".mobile");
      $(".main_menu a").off(".mobile");
      $(window).off(".mobile");
    };
  }, []);

  return null;
}
