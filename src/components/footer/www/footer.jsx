var React = require('react');
var ReactIntl = require('react-intl');
var FormattedMessage = ReactIntl.FormattedMessage;
var injectIntl = ReactIntl.injectIntl;

var FooterBox = require('../container/footer.jsx');
var LanguageChooser = require('../../languagechooser/languagechooser.jsx');

var MediaQuery = require('react-responsive');
var frameless = require('../../../lib/frameless');

require('./footer.scss');

var Footer = React.createClass({
    type: 'Footer',
    render: function () {
        // Make it so that the Scratch Wiki url reflects the user's language.
        var wiki_mapping = {
            'de': 'http://scratch-dach.info/wiki/Hauptseite',
            'hu': 'http://hu.scratch-wiki.info/wiki/Kezdőlap',
            'id': 'http://scratch-indo.info/wiki/Halaman_Utama',
            'jp': 'http://jp.scratch-wiki.info/wiki/メインページ',
            'nl': 'http://nl.scratch-wiki.info/wiki/Hoofdpagina',
            'ru': 'http://scratch-ru.info/wiki/Заглавная_страница'
        };
        var wiki_url = null; // The url to the wiki in the user's language.
        if (this.props.intl.locale in wiki_mapping) {
            wiki_url = wiki_mapping[this.props.intl.locale];
        } else {
            // If the user uses English or there is no wiki in their language, use the English Wiki's url.
            wiki_url = 'https://wiki.scratch.mit.edu/wiki/Scratch_Wiki_Home';
        }
            
        return (
            <FooterBox>
                <MediaQuery maxWidth={frameless.tablet - 1}>
                    <div className="lists">
                        <dl>
                            <dd>
                                <a href="/about/">
                                    <FormattedMessage id='general.aboutScratch' />
                                </a>
                            </dd>
                            <dd>
                                <a href="/jobs/">
                                    <FormattedMessage id='general.jobs' />
                                </a>
                            </dd>
                            <dd>
                                <a href="/contact-us/">
                                    <FormattedMessage id='general.contactUs' />
                                </a>
                            </dd>
                        </dl>
                        <dl>
                            <dd>
                                <a href="/terms_of_use/">
                                    <FormattedMessage id='general.termsOfUse' />
                                </a>
                            </dd>
                            <dd>
                                <a href="/privacy_policy/">
                                    <FormattedMessage id='general.privacyPolicy' />
                                </a>
                            </dd>
                            <dd>
                                <a href="/community_guidelines/">
                                    <FormattedMessage id='general.guidelines' />
                                </a>
                            </dd>
                        </dl>
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={frameless.tablet}>
                    <div className="lists">
                        <dl>
                            <dt>
                                <FormattedMessage id='general.about' />
                            </dt>
                            <dd>
                                <a href="/about/">
                                    <FormattedMessage id='general.aboutScratch' />
                                </a>
                            </dd>
                            <dd>
                                <a href="/parents/">
                                    <FormattedMessage id='general.forParents' />
                                </a>
                            </dd>
                            <dd>
                                <a href="/educators/">
                                    <FormattedMessage id='general.forEducators' />
                                </a>
                            </dd>
                            <dd>
                                <a href="/developers">
                                    <FormattedMessage id='general.forDevelopers' />
                                </a>
                            </dd>
                            <dd>
                                <a href="/info/credits/">
                                    <FormattedMessage id='general.credits' />
                                </a>
                            </dd>
                            <dd>
                                <a href="/jobs/">
                                    <FormattedMessage id='general.jobs' />
                                </a>
                            </dd>
                            <dd>
                                <a href="http://wiki.scratch.mit.edu/wiki/Scratch_Press">
                                    <FormattedMessage id='general.press' />
                                </a>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <FormattedMessage id='general.community' />
                            </dt>
                            <dd>
                                <a href="/community_guidelines/">
                                    <FormattedMessage id='general.guidelines' />
                                </a>
                            </dd>
                            <dd>
                                <a href="/discuss/">
                                    <FormattedMessage id='footer.discuss' />
                                </a>
                            </dd>
                            <dd>
                                <a href={wiki_url}>
                                    <FormattedMessage id='general.wiki' />
                                </a>
                            </dd>
                            <dd>
                                <a href="/statistics/">
                                    <FormattedMessage id='general.statistics' />
                                </a>
                            </dd>
                        </dl>

                        <dl>
                            <dt>
                                <FormattedMessage id='general.support' />
                            </dt>
                            <dd>
                                <a href="/help/">
                                    <FormattedMessage id='footer.help' />
                                </a>
                            </dd>
                            <dd>
                                <a href="/info/faq/">
                                    <FormattedMessage id='general.faq' />
                                </a>
                            </dd>
                            <dd>
                                <a href="/scratch2download/">
                                    <FormattedMessage id='general.offlineEditor' />
                                </a>
                            </dd>
                            <dd>
                                <a href="/contact-us/">
                                    <FormattedMessage id='general.contactUs' />
                                </a>
                            </dd>
                            <dd>
                                <a href="https://secure.donationpay.org/scratchfoundation/">
                                    <FormattedMessage id='general.donate'/>
                                </a>
                            </dd>
                        </dl>

                        <dl>
                            <dt>
                                <FormattedMessage id='general.legal'/>
                            </dt>
                            <dd>
                                <a href="/terms_of_use/">
                                    <FormattedMessage id='general.termsOfUse' />
                                </a>
                            </dd>
                            <dd>
                                <a href="/privacy_policy/">
                                    <FormattedMessage id='general.privacyPolicy' />
                                </a>
                            </dd>
                            <dd>
                                <a href="/DMCA/">
                                    <FormattedMessage id='general.dmca' />
                                </a>
                            </dd>
                        </dl>

                        <dl>
                            <dt>
                                <FormattedMessage id='footer.scratchFamily' />
                            </dt>
                            <dd>
                                <a href="http://scratched.gse.harvard.edu/">
                                    <FormattedMessage id='general.scratchEd' />
                                </a>
                            </dd>
                            <dd>
                                <a href="http://www.scratchjr.org/">
                                    <FormattedMessage id='general.scratchJr' />
                                </a>
                            </dd>
                            <dd>
                                <a href="http://day.scratch.mit.edu/">
                                    <FormattedMessage id='general.scratchday' />
                                </a>
                            </dd>
                            <dd>
                                <a href="/conference/">
                                    <FormattedMessage id='general.scratchConference' />
                                </a>
                            </dd>
                            <dd>
                                <a href="http://www.scratchfoundation.org/">
                                    <FormattedMessage id='general.scratchFoundation' />
                                </a>
                            </dd>
                        </dl>
                    </div>
                </MediaQuery>
                <LanguageChooser locale={this.props.intl.locale} />

                <div className="copyright">
                    <p>
                        <FormattedMessage id='general.copyright' />
                    </p>
                </div>
            </FooterBox>
        );
    }
});

module.exports = injectIntl(Footer);
