import { AbstractControl } from '@angular/forms';
export function cnfPassword(control : AbstractControl):{[key:string]:boolean} | null
{
    debugger;
    const password = control.get('password');
    const cnfPassword = control.get('cnfPassword')
    return password && cnfPassword && password.value !== cnfPassword.value ?
    {misMatch: true}:
    null
}