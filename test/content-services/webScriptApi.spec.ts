/*global describe, it, beforeEach */

import { AlfrescoApi } from '../../src/alfrescoApi';
import { WebscriptApi } from '../../src/api/content-rest-api';

const expect = require('chai').expect;
const AuthResponseMock = require('../../test/mockObjects/mockAlfrescoApi').Auth;
const WebScriptMock = require('../../test/mockObjects/mockAlfrescoApi').WebScript;

describe('WebScript', () => {
    const hostEcm = 'http://127.0.0.1:8080';
    const contextRoot = 'script';
    const servicePath = 'alfresco';
    const scriptPath = 'testWebScript';

    let authResponseMock: any;
    let webScriptMock: any;
    let webscriptApi: WebscriptApi;

    beforeEach((done) => {
        authResponseMock = new AuthResponseMock(hostEcm);
        webScriptMock = new WebScriptMock(hostEcm, contextRoot, servicePath, scriptPath);
        authResponseMock.get201Response();

        const alfrescoJsApi = new AlfrescoApi({
            hostEcm
        });

        alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });

        webscriptApi = new WebscriptApi(alfrescoJsApi);
    });

    it('execute webScript return 400 error if is not present on the server should be handled by reject promise', (done) => {
        webScriptMock.get404Response();

        webscriptApi.executeWebScript('GET', scriptPath, null, contextRoot, servicePath).then(
            () => {
                console.log('success');
            },
            (error: any) => {
                expect(error.status).to.be.equal(404);
                done();
            }
        );
    });

    it('execute webScript GET return 200 if all is ok  should be handled by resolve promise', (done) => {
        webScriptMock.get200Response();

        webscriptApi.executeWebScript('GET', scriptPath, null, contextRoot, servicePath).then(
            () => {
                done();
            },
            (error: any) => {
                console.log('error' + JSON.stringify(error));
            }
        );
    });

    it('execute webScript that return HTML should not return it as Object', (done) => {
        webScriptMock.get200ResponseHTMLFormat();

        webscriptApi.executeWebScript('GET', 'sample/folder/Company%20Home').then(
            (data) => {
                try {
                    JSON.parse(data);
                } catch (e) {
                    done();
                }
            },
            () => {
                console.log('error');
            }
        );
    });

    describe('Events', () => {
        it('WebScript should fire success event at the end', (done) => {
            webScriptMock.get200Response();

            const webscriptPromise: any = webscriptApi.executeWebScript('GET', scriptPath, null, contextRoot, servicePath);

            webscriptPromise.catch(() => {});
            webscriptPromise.on('success', () => {
                done();
            });
        });

        it('WebScript should fire error event if something go wrong', (done) => {
            webScriptMock.get404Response();

            const webscriptPromise: any = webscriptApi.executeWebScript('GET', scriptPath, null, contextRoot, servicePath);

            webscriptPromise.catch(() => {});
            webscriptPromise.on('error', () => {
                done();
            });
        });

        it('WebScript should fire unauthorized event if get 401', (done) => {
            webScriptMock.get401Response();

            const webscriptPromise: any = webscriptApi.executeWebScript('GET', scriptPath, null, contextRoot, servicePath);

            webscriptPromise.catch(() => {});
            webscriptPromise.on('unauthorized', () => {
                done();
            });
        });
    });
});
