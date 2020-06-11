import { AlfrescoApi } from '../src/alfrescoApi';
import { ContentApi } from '../src/api/content-rest-api/api/content.api';

const expect = require('chai').expect;
const AuthResponseMock = require('../test/mockObjects/mockAlfrescoApi').Auth;

describe('AlfrescoContent', () => {
    const hostEcm = 'http://127.0.0.1:8080';
    const nodesUrl = hostEcm + '/alfresco/api/-default-/public/alfresco/versions/1/nodes/';
    const sharedLinksUrl = hostEcm + '/alfresco/api/-default-/public/alfresco/versions/1/shared-links/';
    const nodeId = '1a0b110f-1e09-4ca2-b367-fe25e4964a4';

    let authResponseMock: any;
    let contentApi: ContentApi;

    beforeEach((done) => {
        authResponseMock = new AuthResponseMock(hostEcm);
        authResponseMock.get201Response();

        const alfrescoJsApi = new AlfrescoApi({
            hostEcm
        });

        alfrescoJsApi.login('admin', 'admin').then(() => {
            contentApi = new ContentApi(alfrescoJsApi);
            done();
        });
    });

    it('outputs thumbnail url', () => {
        const thumbnailUrl = contentApi.getDocumentThumbnailUrl(nodeId);

        expect(thumbnailUrl).to.be.equal(nodesUrl + nodeId +
            '/renditions/doclib/content?attachment=false&' +
            'alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('outputs thumbnail url as attachment', () => {
        const thumbnailUrl = contentApi.getDocumentThumbnailUrl(nodeId, true);

        expect(thumbnailUrl).to.be.equal(nodesUrl + nodeId +
            '/renditions/doclib/content?attachment=true&' +
            'alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('outputs thumbnail url with custom ticket', () => {
        const thumbnailUrl = contentApi.getDocumentThumbnailUrl(nodeId, true, 'custom_ticket');

        expect(thumbnailUrl).to.be.equal(nodesUrl + nodeId +
            '/renditions/doclib/content?attachment=true&' +
            'alf_ticket=custom_ticket');
    });

    it('outputs preview url', () => {
        const thumbnailUrl = contentApi.getDocumentPreviewUrl(nodeId);

        expect(thumbnailUrl).to.be.equal(nodesUrl + nodeId +
            '/renditions/imgpreview/content?attachment=false&' +
            'alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('outputs preview url as attachment', () => {
        const thumbnailUrl = contentApi.getDocumentPreviewUrl(nodeId, true);

        expect(thumbnailUrl).to.be.equal(nodesUrl + nodeId +
            '/renditions/imgpreview/content?attachment=true&' +
            'alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('outputs preview url with custom ticket', () => {
        const thumbnailUrl = contentApi.getDocumentPreviewUrl(nodeId, true, 'custom_ticket');

        expect(thumbnailUrl).to.be.equal(nodesUrl + nodeId +
            '/renditions/imgpreview/content?attachment=true&' +
            'alf_ticket=custom_ticket');
    });

    it('outputs content url', () => {
        let contentUrl = contentApi.getContentUrl(nodeId);

        expect(contentUrl).to.be.equal(nodesUrl + nodeId +
            '/content?attachment=false' +
            '&alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('outputs content url as attachment', () => {
        let contentUrl = contentApi.getContentUrl(nodeId, true);

        expect(contentUrl).to.be.equal(nodesUrl + nodeId +
            '/content?attachment=true' +
            '&alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('outputs content url with custom ticket', () => {
        let contentUrl = contentApi.getContentUrl(nodeId, true, 'custom_ticket');

        expect(contentUrl).to.be.equal(nodesUrl + nodeId +
            '/content?attachment=true' +
            '&alf_ticket=custom_ticket');
    });

    it('outputs rendition url', () => {
        const encoding = 'pdf';
        let contentUrl = contentApi.getRenditionUrl(nodeId, encoding);

        expect(contentUrl).to.be.equal(nodesUrl + nodeId +
            '/renditions/' + encoding +
            '/content?attachment=false' +
            '&alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('outputs rendition url as attachment', () => {
        const encoding = 'pdf';
        let contentUrl = contentApi.getRenditionUrl(nodeId, encoding, true);

        expect(contentUrl).to.be.equal(nodesUrl + nodeId +
            '/renditions/' + encoding +
            '/content?attachment=true' +
            '&alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('outputs rendition url with custom ticket', () => {
        const encoding = 'pdf';
        let contentUrl = contentApi.getRenditionUrl(nodeId, encoding, true, 'custom_ticket');

        expect(contentUrl).to.be.equal(nodesUrl + nodeId +
            '/renditions/' + encoding +
            '/content?attachment=true' +
            '&alf_ticket=custom_ticket');
    });

    it('should output shared link content url', () => {
        const url = contentApi.getSharedLinkContentUrl(nodeId);
        expect(url).to.be.equal(sharedLinksUrl + nodeId + '/content?attachment=false');
    });

    it('should output shared link content as attachment', () => {
        const url = contentApi.getSharedLinkContentUrl(nodeId, true);
        expect(url).to.be.equal(sharedLinksUrl + nodeId + '/content?attachment=true');
    });

    it('should generate shared link rendition url', () => {
        const url = contentApi.getSharedLinkRenditionUrl(nodeId, 'pdf');
        expect(url).to.be.equal(sharedLinksUrl + nodeId + '/renditions/pdf/content?attachment=false');
    });

    it('should generate shared link rendition url for download', () => {
        const url = contentApi.getSharedLinkRenditionUrl(nodeId, 'pdf', true);
        expect(url).to.be.equal(sharedLinksUrl + nodeId + '/renditions/pdf/content?attachment=true');
    });
});
