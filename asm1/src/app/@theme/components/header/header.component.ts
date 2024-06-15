import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LayoutService } from "../../../@core/services/common/layout.service";
import { LocalStorageService } from "../../../@core/services/common"; // Thêm import LocalStorageService
import { Router } from '@angular/router';
import { LOCALSTORAGE_KEY } from 'app/@core/config';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
  ];

  currentTheme = 'default';

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
  

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private router: Router,

    private breakpointService: NbMediaBreakpointsService,
    private storageService: LocalStorageService // Thêm private storageService
  ) { }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
    this.user = { name: 'Alibaba', picture: 'assets/images/account.png' }
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);

    // Đăng ký sự kiện khi click vào menu
    this.menuService.onItemClick()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((event) => {
        if (event.item.title === 'Log out') {
          this.logout(); // Gọi hàm logout khi click vào "Log out"
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  logout() {
    // Xoá token và thông tin người dùng trong localStorage
    this.storageService.removeItem(LOCALSTORAGE_KEY.token);
    this.storageService.removeItem(LOCALSTORAGE_KEY.userInfo);
    this.storageService.removeItem(LOCALSTORAGE_KEY.userInfo2);
    // Chuyển hướng về trang đăng nhập (hoặc trang chủ)
    // Ví dụ chuyển hướng về trang đăng nhập
    this.router.navigate(['/auth/login']);
  }
}
