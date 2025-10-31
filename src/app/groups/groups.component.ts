import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type BackendItem = 'HDFS' | 'HIVE' | 'OZONE' | 'KAFKA' | string;

export interface Category {
  id: string;
  title: string;
  description?: string;
  items?: BackendItem[];
}

export interface PermissionPayload {
  categories: string[];      // selected category ids
  backends: BackendItem[];   // selected backend items
  roles: string[];           // selected roles
  groups: string[];          // selected groups
  users: string[];           // selected users
  permissions: string[];     // selected permissions
}

@Component({
  selector: 'app-groups',
  standalone: false,
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent {/* 
 @Input() categories: Category[] = [
    { id: 'competition', title: 'Competition Law', description: 'Regulatory constraints for competition' },
    { id: 'wholesale', title: 'Wholesale and Retail Data Processing', description: 'Processing rules for retail data' }
  ];

  @Input() availableBackends: BackendItem[] = ['HDFS', 'HIVE', 'OZONE', 'KAFKA'];

  @Input() roles: string[] = [];           // can be prefilled by parent
  @Input() selectedGroups: string[] = [];
  @Input() selectedUsers: string[] = [];
  @Input() selectedPermissions: string[] = [];

  @Output() applied = new EventEmitter<PermissionPayload>();

  // internal selections
  selectedCategoryIds: string[] = [];
  selectedBackends: BackendItem[] = [];

  // helper for keyboard list focus
  focusedCategoryId?: string;

  isCategorySelected(id: string) {
    return this.selectedCategoryIds.includes(id);
  }

  toggleCategory(id: string) {
    const idx = this.selectedCategoryIds.indexOf(id);
    if (idx === -1) this.selectedCategoryIds = [...this.selectedCategoryIds, id];
    else this.selectedCategoryIds = this.selectedCategoryIds.filter(x => x !== id);
    this.focusedCategoryId = id;
  }

  lookupCategoryTitle(id: string) {
    return this.categories.find(c => c.id === id)?.title ?? id;
  }

  clearAllCategories() {
    this.selectedCategoryIds = [];
    this.focusedCategoryId = undefined;
  }

  addSelectedCategory() {
    if (!this.focusedCategoryId) return;
    if (!this.selectedCategoryIds.includes(this.focusedCategoryId)) {
      this.selectedCategoryIds = [...this.selectedCategoryIds, this.focusedCategoryId];
    }
  }

  onCategoryListKeydown(e: KeyboardEvent) {
    const currentIndex = this.focusedCategoryId ? this.categories.findIndex(c => c.id === this.focusedCategoryId) : -1;
    if (e.key === 'ArrowDown') {
      const next = Math.min(this.categories.length - 1, currentIndex + 1);
      this.focusedCategoryId = this.categories[next]?.id;
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      const prev = Math.max(0, currentIndex - 1);
      this.focusedCategoryId = this.categories[prev]?.id;
      e.preventDefault();
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (this.focusedCategoryId) this.toggleCategory(this.focusedCategoryId);
      e.preventDefault();
    }
  }

  onBackendToggle(item: BackendItem, checked: boolean) {
    if (checked) this.selectedBackends = [...this.selectedBackends, item];
    else this.selectedBackends = this.selectedBackends.filter(x => x !== item);
  }

  addAllBackends() {
    this.selectedBackends = [...new Set([...this.selectedBackends, ...this.availableBackends])];
  }

  clearAllBackends() {
    this.selectedBackends = [];
  }

  canApply(): boolean {
    return this.selectedCategoryIds.length > 0 && this.selectedBackends.length > 0 && (this.roles.length + this.selectedGroups.length + this.selectedUsers.length + this.selectedPermissions.length > 0);
  }

  apply() {
    const payload: PermissionPayload = {
      categories: [...this.selectedCategoryIds],
      backends: [...this.selectedBackends],
      roles: [...this.roles],
      groups: [...this.selectedGroups],
      users: [...this.selectedUsers],
      permissions: [...this.selectedPermissions]
    };
    this.applied.emit(payload);
  }

  reset() {
    this.selectedCategoryIds = [];
    this.selectedBackends = [];
    this.roles = [];
    this.selectedGroups = [];
    this.selectedUsers = [];
    this.selectedPermissions = [];
  } */
  rowValue = 100;
  columnValue = 5;

  get divisionResult(): number {
    return this.columnValue !== 0 ? this.rowValue / this.columnValue : 0;
  }
}
