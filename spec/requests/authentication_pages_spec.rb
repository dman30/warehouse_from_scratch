require 'spec_helper'

describe "AuthenticationPages" do

  describe "Authentication" do

    subject { page }

    describe "signin" do
      before { visit signin_path }

      describe "with invalid information" do
        before { click_button "Sign In" }

        it { should have_selector('title',text:"Sign In") }
        it { should have_selector('div.alert.alert-error',text:'Invalid') }
      end

      describe "with valid information" do
        let(:user) { FactoryGirl.create(:user) }

        before do
          fill_in "Email", with: user.email
          fill_in "Password", with: user.password
          click_button "Sign In"
        end

        it { should have_selector('title', text: user.name) }
        it { should have_link('Profile', href: user_path(user))}
        it { should have_link('Abmelden', href: signout_path) }
        it { should_not have_link('Anmelden', href: signin_path) }

        describe "after visiting another page" do
          before { click_link "Home" }

          it { should_not have_selector('div.alert.alert-error') }

          describe 'should not be able to access another user' do
          end
        end
      end
    end

    describe 'with valid information' do
      let(:user){ FactoryGirl.creat(:user) }
      before { sign_in user }

      it { should have_link('Benutzer', href: user_path(user)) }
      it { should have_link('Einstellungen', href: edit_user_path(user)) }
      it { should have_link('Abmelden', href: signout_path) }
      it { should_not have_link('Anmelden', href: signin_path) }
    end
  end
end
