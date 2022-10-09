import { wrap } from '../../utils';
import observedAttributesMonitoredObject from './monitored-object.observed-attributes';

export const monitoredObjectDefine = () => customElements.define('monitored-object', wrap(()=>import('./monitored-object.component'), 'MonitoredObject', observedAttributesMonitoredObject));