import { wrap } from './utils';

// hello-world
// import observedAttributesHelloworld from './components/hello-world/hello-world.observed-attributes';
// let observedAttributesHelloworld = [ 'prop' ];
customElements.define( 'hello-world', wrap( () => import( './components/hello-world/hello-world.component' ), 'HelloWorld', [ 'prop' ] ) );

// monitored-object
import observedAttributesMonitoredObject from './components/monitored-object/monitored-object.observed-attributes';
customElements.define( 'monitored-object', wrap( () => import( './components/monitored-object/monitored-object.component' ), 'MonitoredObject', observedAttributesMonitoredObject ) );
