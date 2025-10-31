import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormArray, FormBuilder, FormGroup } from '@angular/forms';


interface AccessControlEntry {
  roles: string[];
  groups: string[];
  users: string[];
  permissions: string[];
}
@Component({
  selector: 'app-edit-policy',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-policy.component.html',
  styleUrl: './edit-policy.component.css'
})
export class EditPolicyComponent {
public resetForm(): void {
throw new Error('Method not implemented.');
}
saveChanges() {
throw new Error('Method not implemented.');
}
   data: AccessControlEntry[] = [
    {
      roles: ['Competition Law', 'Wholesale and Retail Data Processing'],
      groups: [],
      users: [],
      permissions: ['HDFS', 'HIVE', 'OZONE', 'KAFKA']
    }
  ];

  edit(entry: AccessControlEntry) {
    console.log('Edit:', entry);
  }

  delete(entry: AccessControlEntry) {
    this.data = this.data.filter(e => e !== entry);
  }
 /*  form: any; */
  /*  form = this.fb.group({
    roles: this.fb.array(['Competition Law', 'Wholesale and Retail Data Processing']),
    groups: this.fb.array([]),
    users: this.fb.array([]),
    permissions: this.fb.array(['HDFS', 'HIVE', 'OZONE', 'KAFKA'])
  }); */
/* 
  constructor(private fb: FormBuilder) {}

  get roles() { return this.form.get('roles') as FormArray; }
  get groups() { return this.form.get('groups') as FormArray; }
  get users() { return this.form.get('users') as FormArray; }
  get permissions() { return this.form.get('permissions') as FormArray; }

  addItem(array: FormArray, value: string) {
    if (value) array.push(this.fb.control(value));
  }

  removeItem(array: FormArray, index: number) {
    array.removeAt(index);
  }

  clearPermissions() {
    this.permissions.clear();
  }

  resetForm() {
    this.form.reset();
  }

  saveChanges() {
    console.log('Form Data:', this.form.value);
  } */
}

/* addCondition() {
throw new Error('Method not implemented.');
}
onReset() {
throw new Error('Method not implemented.');
}
onSave() {
throw new Error('Method not implemented.');
}
panelOpen = false; */
    /*  policyForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.policyForm = this.fb.group({
      policyType: ['Access'],
      policyId: [183],
      enabled: [true],
      policyName: ['PII_FAMILY'],
      policyLabel: ['Option_1_Option_3'],
      tags: ['PII_FAMILY'],
      description: ['Add any privacy law segmentation information'],
      auditLoggingEnabled: [true],
      visibilityPeriods: this.fb.array([]),
      allowConditions: this.fb.array([
        this.createCondition('Competition Law', 'Group_1', 'John Willson', ['HDFS', 'Hive', 'OZONE']),
        this.createCondition('Information & Real Data Processing', 'Group_2', 'Jack Willson', ['KAFKA', 'All']),
        this.createCondition('PII', 'Group_3', 'Jill Willson', ['All'])
      ])
    });
  }

  get allowConditions(): FormArray {
    return this.policyForm.get('allowConditions') as FormArray;
  }

  createCondition(rule = '', group = '', user = '', permissions: string[] = []): FormGroup {
    return this.fb.group({
      rule: [rule],
      group: [group],
      user: [user],
      permissions: [permissions]
    });
  }

  addCondition(): void {
    this.allowConditions.push(this.createCondition());
  }

  saveChanges(): void {
    console.log('Policy Saved:', this.policyForm.value);
  } *//* 
   options = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
    { id: 4, label: 'Option 4' }
  ];

  selectedIds = new Set<number>();
  open = false;
  focusIndex = -1;

  constructor() {
    // preselect Option 1 and Option 3 to match the screenshot
    this.selectedIds.add(1);
    this.selectedIds.add(3);
  }

  toggleOpen() {
    this.open = !this.open;
    this.focusIndex = this.open ? 0 : -1;
  }

  openDropdown() {
    this.open = true;
    this.focusIndex = 0;
  }

  closeDropdown() {
    this.open = false;
    this.focusIndex = -1;
  }

  isSelected(optId: number) {
    return this.selectedIds.has(optId);
  }

  toggleSelection(optId: number, ev?: Event) {
    ev?.stopPropagation();
    if (this.selectedIds.has(optId)) {
      this.selectedIds.delete(optId);
    } else {
      this.selectedIds.add(optId);
    }
  }

  get selectedLabels(): string {
    return Array.from(this.selectedIds)
      .map(id => this.options.find(o => o.id === id)?.label)
      .filter(Boolean)
      .join(', ');
  }

  get selectedCount(): number {
    return this.selectedIds.size;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(ev: Event) {
    const target = ev.target as HTMLElement;
    if (!target.closest('.policy-select-root')) {
      if (this.open) this.closeDropdown();
    }
  }

  @HostListener('keydown', ['$event'])
  handleKeydown(ev: KeyboardEvent) {
    if (!this.open) {
      if (ev.key === 'Enter' || ev.key === ' ' || ev.key === 'Spacebar') {
        this.openDropdown();
        ev.preventDefault();
      }
      return;
    }

    if (ev.key === 'Escape') {
      this.closeDropdown();
      ev.preventDefault();
      return;
    }

    if (ev.key === 'ArrowDown') {
      this.focusIndex = Math.min(this.focusIndex + 1, this.options.length - 1);
      ev.preventDefault();
      return;
    }

    if (ev.key === 'ArrowUp') {
      this.focusIndex = Math.max(this.focusIndex - 1, 0);
      ev.preventDefault();
      return;
    }

    if (ev.key === 'Enter' || ev.key === ' ' || ev.key === 'Spacebar') {
      const current = this.options[this.focusIndex];
      if (current) this.toggleSelection(current.id, ev);
      ev.preventDefault();
      return;
    }
  }

  isFocused(index: number) {
    return this.focusIndex === index;
  } */
